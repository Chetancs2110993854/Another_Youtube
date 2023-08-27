import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import {Box} from "@mui/material";
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  
   <BrowserRouter>
   <Box sx={{ backgroundColor: '#000' }}>
    <Navbar /> //component
    <Routes>
        <Route path  = "/" exact element ={<Feed />}/> //going to main video page
        <Route path='/video/:id' element={<VideoDetail />} /> // if in video we type a specific id we reach to that video
        <Route path='/channel/:id' element={<ChannelDetail />} /> //rendering channel in video
        <Route path='/search/:searchTerm' element={<SearchFeed />} /> // Rendering search and searchterms
    </Routes>
   </Box>
   </BrowserRouter>
);

export default App
