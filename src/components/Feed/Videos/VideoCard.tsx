import React from "react";
import {videosItem} from "../Feed";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl} from "../../../utils/constants";
import {CheckCircle} from "@mui/icons-material";

const VideoCard: React.FC<{ video: videosItem }> = ({video}) => {
    return <Card sx={{width: {md: 320, xs: '100%'}, boxShadow: 0, borderRadius: 0}}>
        <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
            <CardMedia
                image={video.snippet?.thumbnails?.high?.url}
                sx={{width: 358, height: 180}}
            />
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                    {video.snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={video.snippet.channelId ? `/video/${video.snippet.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='grey'>
                    {video.snippet.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fondSize: 12, color: 'gray', ml: '5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
}

export default VideoCard