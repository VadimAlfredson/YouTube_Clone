import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import ChannelDetail from "./components/ChannelDetail/ChannelDetail";
import SearchFeed from "./components/SearchFeed/SearchFeed";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Box sx={{backgroundColor: '#000'}}>
          <Navbar />
          <Routes>
              <Route path={'/'} element={<Feed />}/>
              <Route path={'/video/:id'} element={<VideoDetail />}/>
              <Route path={'/channel/:id'} element={<ChannelDetail />}/>
              <Route path={'/search/:searchTerm'} element={<SearchFeed />}/>
              <Route path={'/*'} element={<Navigate to={'/'} />} />
          </Routes>
      </Box>
  </BrowserRouter>
);
export default App