import React, { useState, useEffect, createContext } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Videos, SideBar } from './';
import { FetchFromAPI } from "../utils/FetchFromApi";
import { useLoading } from './MyLoader';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])
  const {isLoading, setIsLoading} = useLoading()
  useEffect(() => {
    setIsLoading(true)
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items)
      setIsLoading(false)
      console.log(data.items)
    })
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, mt: { sx: 0, md: 2 }}}>
      <Box sx={{ height: { sx: "auto", md: "95vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2  } }}>
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff'}}>
        Copyright 2024 @Umer Inc. 
      </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white"}}>
            {selectedCategory} <span style={{ color: "#f01111" }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed