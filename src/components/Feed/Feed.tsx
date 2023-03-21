import React, {useEffect, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos/Videos";
import {fetchFromAPI} from "../../api/API";

export type videosItem = {
    id: {
        kind: string
        videoId?: string
        channelId?: string
    }
    kind: string
    snippet: {
        channelId: string
        channelTitle:
            string
        description: string
        liveBroadcastContent: string
        publishTime: string
        publishedAt: string
    }
    thumbnails: {
        default: { url: string, width: number, height: number }
        high: { url: string, width: number, height: number }
        medium: { url: string, width: number, height: number }
    }
    title: string
}

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('New')
    const [videos, setVideos] = useState([] as videosItem[])
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                setVideos(data.items)
            })
    }, [selectedCategory])

    let onSelectedCategory = (categoryName: string) => {
        setSelectedCategory(categoryName)
    }

    return (
        <Stack sx={{
            flexDirection: {sx: 'column', md: 'row'}
        }}>
            <Box sx={{
                height: {sx: 'auto', md: '92vh'},
                borderRight: '1px solid #3d3d3d',
                px: {sx: 0, md: 2}
            }}>
                <Sidebar
                    onSelectedCategory={onSelectedCategory}
                    selectedCategory={selectedCategory}
                />
                <Typography
                    className='copyright'
                    variant='body2'
                    sx={{
                        mt: 1.5,
                        color: '#fff'
                    }}
                >
                    Directed by Vadim Allayarov
                </Typography>
            </Box>
            <Box
                p={2}
                sx={{
                    overflowY: 'auto',
                    height: '90vh',
                    flex: 2
                }}>
                <Typography
                    variant="h4"
                    mb={2}
                    sx={{color: 'white'}}
                >
                    {selectedCategory} <span
                    style={{color: '#F31503'}}
                >videos</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    )
}

export default Feed