import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import { Navbar, Feed, VideosDetails, ChannelDetails, SearchDetails } from './components'

const  App = () => {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar /> 
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideosDetails />} />
        <Route path="/channel/:id" exact element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" exact element={<SearchDetails />} />
      </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
