import React, {useEffect, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";
import ReactPlayer from "react-player";
import {useAppDispatch, useAppSelector} from "../../types/hooks";
import {getVideoDetailsTC} from "../../redux/videoDetails_reducer";
import {Link, useParams} from "react-router-dom";
import s from "./VideoDetails.module.css"
import {videoDetailsType} from "../../types/typesItems";
import {CheckCircle} from "@mui/icons-material";

const VideoDetail = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const videoDetailsState = useAppSelector(state => state.videoDetails.videoDetails)


    const [videoDetails, setVideoDetails] = useState<videoDetailsType>(videoDetailsState)

    useEffect(() => {
        if (videoDetails !== videoDetailsState) {
            setVideoDetails(videoDetailsState)
        }
    }, [videoDetailsState])

    useEffect(() => {
        debugger
        if (videoDetails.id !== id) {
            dispatch(getVideoDetailsTC(`${id}`))
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
                                <Typography variant='body1' sx={{opacity: 0.7}}></Typography>
                                {parseInt(videoDetails.statistics.viewCount).toLocaleString()} views
                                {parseInt(videoDetails.statistics.likeCount).toLocaleString()} likes
                            </Stack>
                    </Stack>}
                </Box>
            </Box>
        </Stack>

    </Box>
}

export default VideoDetail