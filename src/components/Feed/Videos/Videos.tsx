import React from "react";
import {videosItem} from "../Feed";
import {Box, Stack} from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";


type propsType = {
    videos: videosItem[]
}
const Videos = (props: propsType) => {
    console.log(props.videos)
    return <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='start'
        gap={2}
    >
        {props.videos.map((item, index) => (
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
    </Stack>
}

export default Videos