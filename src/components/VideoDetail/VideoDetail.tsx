import React, {useEffect, useState} from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import ReactPlayer from "react-player";
import {useAppDispatch, useAppSelector} from "../../types/hooks";
import {getCommentsVideoTC, getRelatedVideosTC, getVideoDetailsTC} from "../../redux/videoDetails_reducer";
import {Link, useParams} from "react-router-dom";
import s from "./VideoDetails.module.css"
import {videoDetailsType, videosItemType} from "../../types/typesItems";
import {CheckCircle} from "@mui/icons-material";
import VideoCard from "../Cards/VideoCard";
import Videos from "../Feed/Videos/Videos";

const VideoDetail = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()

    const videoDetailsState = useAppSelector(state => state.videoDetails.videoDetails)
    const relatedVideosState = useAppSelector(state => state.videoDetails.relatedVideos)
    const commentsVideo =useAppSelector(state => state.videoDetails.comments)

    const [showComments, setShowComments] = useState(false)
    const [relatedVideos, setRelatedVideos] = useState<videosItemType[]>(relatedVideosState)
    const [videoDetails, setVideoDetails] = useState<videoDetailsType>(videoDetailsState)

    useEffect(() => {
        if (showComments) {
        dispatch(getCommentsVideoTC(`${id}`))}
    }, [showComments, id])

    useEffect(() => {
        console.log(commentsVideo)
    }, [commentsVideo])

    useEffect(() => {
        if (videoDetails !== videoDetailsState) {
            setVideoDetails(videoDetailsState)
        }
    }, [videoDetailsState])

    useEffect(() => {
        if (relatedVideos !== relatedVideosState) {
            setRelatedVideos(relatedVideosState)
        }
    }, [relatedVideosState])

    useEffect(() => {
        if (videoDetails.id !== id) {
            dispatch(getVideoDetailsTC(`${id}`))
            dispatch(getRelatedVideosTC(`${id}`))
        }
    }, [id])


    return <Box minHeight={'95vh'}>
        <Stack direction={{xs: 'column', md: 'row'}}>
            <Box flex={1}>
                <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        className={s.reactPlayer}
                        controls
                    />
                    {videoDetails.id && <Typography
                        color='#fff' variant='h5' fontWeight='bold' p={2}
                    >
                        {videoDetails.snippet.title}
                    </Typography>}
                    {videoDetails.id &&
                        <Stack direction='row' justifyContent='space-between' sx={{color: '#fff'}} py={1} px={2}>
                            <Link to={`/channel/${videoDetails.snippet.channelId}`}>
                                <Typography variant='subtitle1' color='#fff'>
                                    {videoDetails.snippet.channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color: 'grey', ml: '5px'}}/>
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{opacity: 0.7}}>
                                    {parseInt(videoDetails.statistics.viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant='body1' sx={{opacity: 0.7}}>
                                    {parseInt(videoDetails.statistics.likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>}
                    <Box>{!showComments
                        ? <Button onClick={() => setShowComments(true)}
                                  color='primary'
                                  sx={{width: '100%'}}
                                  >Show comments</Button>
                        : <Box color='white'>Comments</Box>}
                    </Box>
                </Box>
            </Box>
            <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
                <Videos videos={relatedVideos} direction={'column'}/>
            </Box>
        </Stack>
    </Box>
}

export default VideoDetail