import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {videosItemType} from "../../types/typesItems";
import {useAppDispatch, useAppSelector} from "../../types/hooks";
import { getSuggestedVideos } from "../../redux/suggestedVideos_reducer";
import Videos from "../Feed/Videos/Videos";
import {useParams} from "react-router-dom";



const SearchFeed = () => {
 const dispatch = useAppDispatch()
 const videosItems = useAppSelector(state => state.videos.videos)
    const { searchTerm } = useParams();

 const [videos, setVideos] = useState(videosItems as videosItemType[])

 useEffect(() => {
  if (videos !== videosItems) {
   setVideos(videosItems)
  }
 }, [videosItems])
 useEffect(() => {
     if (searchTerm !== ''){
  dispatch(getSuggestedVideos(`${searchTerm}`))}
 }, [searchTerm])


 return (
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
        Search result for <span
           style={{color: '#F31503'}}
       >{searchTerm}</span>
       </Typography>
       <Videos videos={videos}/>
      </Box>
 )
}

export default SearchFeed