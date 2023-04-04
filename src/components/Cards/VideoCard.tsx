import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl} from "../../utils/constants";
import {CheckCircle} from "@mui/icons-material";
import {videosItemType} from "../../types/typesItems";

const VideoCard: React.FC<{ video: videosItemType }> = ({video}) => {
    return <Card sx={{width: {xs: '100%', sm: 358, md: 320 }, boxShadow: 'none', borderRadius: 0}}>
        <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
            <CardMedia
                image={video.snippet?.thumbnails?.high?.url}
                sx={{width: {xs: '100%', sm: 358, md: 320}, height: 180}}
            />
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '70px'}}>
            <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                    {video.snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={video.snippet.channelId ? `/video/${video.snippet.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='grey'>
                    {video.snippet.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{width: 12, color: 'gray', ml: '5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
}

export default VideoCard