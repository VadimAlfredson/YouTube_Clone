import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../types/hooks";
import {getChannelDetails} from "../../redux/channelDetails_reducer";
import ChannelCard from "../Cards/ChannelCard";
import {channelDetailsType} from "../../types/typesItems";

const ChannelDetail = () => {
    const dispatch = useAppDispatch()
    const channelDetailsItem = useAppSelector(state => state.channelDetails.channelDetails)

    const [channelDetail, setChannelDetail] = useState<channelDetailsType>(channelDetailsItem)

    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        dispatch(getChannelDetails(`${id}`))
    }, [id])
    useEffect(() => {
        setChannelDetail(channelDetailsItem)
    }, [channelDetailsItem])

    return <Box minHeight='95vh'>
        <Box>
        <div style={{
            background: 'linear-gradient(90deg, rgba(14,36,0,1) 0%, rgba(121,63,9,1) 27%, rgba(102,4,187,1) 74%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px'
        }}/>
            {channelDetail.id && <ChannelCard
        id={channelDetail.id.channelId}
        img={channelDetail.snippet.thumbnails.high.url}
        title={channelDetail.snippet.title} />}
        </Box>
    </Box>
}

export default ChannelDetail