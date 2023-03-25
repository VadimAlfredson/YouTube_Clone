import React, {useEffect, useState} from "react";
import {Box, Stack} from "@mui/material";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../types/hooks";
import {getDetailsOfChannelTC, getVideosOfChannelTC} from "../../redux/channelDetails_reducer";
import ChannelCard from "../Cards/ChannelCard";
import {channelDetailsType, videosItemType} from "../../types/typesItems";
import VideoCard from "../Cards/VideoCard";
import Videos from "../Feed/Videos/Videos";

const ChannelDetail = () => {
    const dispatch = useAppDispatch()
    const channelDetailsItem = useAppSelector(state => state.channelDetails.channelDetails)
    const videosOfChannel = useAppSelector(state => state.channelDetails.videosOfChannel)

    const [channelDetail, setChannelDetail] = useState<channelDetailsType>(channelDetailsItem)
    const [videos, setVideos] = useState<videosItemType[]>(videosOfChannel)

    const {id} = useParams()

    console.log('refresh')

    useEffect(() => {
        dispatch(getDetailsOfChannelTC(`${id}`))
        dispatch(getVideosOfChannelTC(`${id}`))
    }, [id])
    useEffect(() => {
        setChannelDetail(channelDetailsItem)
    }, [channelDetailsItem])
    useEffect(() => {
        setVideos(videosOfChannel)
    }, [videosOfChannel])

    return <Box minHeight='95vh'>
        <Box>
            <div style={{
                background: 'linear-gradient(90deg, rgba(14,36,0,1) 0%, rgba(121,63,9,1) 27%, rgba(102,4,187,1) 74%, rgba(0,212,255,1) 100%)',
                zIndex: 10,
                height: '300px'
            }}/>
            {channelDetail.id && <ChannelCard
                marginTop='-93px'
                id={channelDetail.id.channelId}
                img={channelDetail.snippet.thumbnails.high.url}
                title={channelDetail.snippet.title}/>}

        </Box>
        <Box display='flex' p='2'>
            <Box sx={{mr: {sm:'100px'}}} />
            <Videos videos={videos}/>
        </Box>
    </Box>
}

export default ChannelDetail