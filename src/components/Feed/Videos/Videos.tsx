import React from "react";
import {Box, Stack} from "@mui/material";
import VideoCard from "../../Cards/VideoCard";
import ChannelCard from "../../Cards/ChannelCard";
import { videosItemType } from "../../../types/typesItems";


type propsType = {
    videos: videosItemType[]
    direction?: "column" | "row" | "row-reverse" | "column-reverse"
}
const Videos = (props: propsType) => {
    console.log(props.videos)
    return <Stack
        direction={props.direction || 'row'}
        flexWrap='wrap'
        justifyContent='start'
        gap={2}
    >
        {props.videos.map((item, index) => (
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard id={item.id.channelId} img={item.snippet.thumbnails.high.url} title={item.snippet.title}/>}
            </Box>
        ))}
    </Stack>
}

export default Videos