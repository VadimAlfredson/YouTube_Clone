import React from "react";
import {videosItem} from "../Feed";
import {Card} from "@mui/material";

const VideoCard: React.FC<{video: videosItem}> = ({video}) => {
    return <Card sx={{width: {md: '320', xs: '100%'}, boxShadow: 'none', borderRadius: 'none'}}
    >

    </Card>
}

export default VideoCard