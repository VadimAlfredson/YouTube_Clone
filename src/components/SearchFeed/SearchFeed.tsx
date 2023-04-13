import React, {useEffect, useState} from "react";
import {Box, CircularProgress, Typography} from "@mui/material";
import {videosItemType} from "../../types/typesItems";
import {useAppDispatch, useAppSelector} from "../../types/hooks";
import {getSuggestedVideos} from "../../redux/suggestedVideos_reducer";
import Videos from "../Feed/Videos/Videos";
import {useNavigate, useParams} from "react-router-dom";


const SearchFeed = () => {
    const dispatch = useAppDispatch()
    const videosItems = useAppSelector(state => state.videos.videos)
    const regionCode = useAppSelector(state => state.videos.regionCode)

    const {searchTerm} = useParams();
    const navigate = useNavigate()

    const [videos, setVideos] = useState(videosItems as videosItemType[])

    useEffect(() => {
        if (videos !== videosItems) {
            setVideos(videosItems)
        }
    }, [videosItems])
    useEffect(() => {
        if (searchTerm !== '') {
            dispatch(getSuggestedVideos(`${searchTerm}`, regionCode))
            navigate(`/search/${searchTerm}`)
        }
    }, [searchTerm])


    return !videos[0] ? <Box sx={{height: '90vh', flex: 2, alignItems: 'center'}}><CircularProgress color="secondary"/></Box>
        : <Box
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
                Search result for <span
                style={{color: '#F31503'}}
            >{searchTerm}</span>
            </Typography>
            <Videos videos={videos}/>
        </Box>}

export default SearchFeed