import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { FetchFromAPI } from "../utils/FetchFromApi";
import { useParams } from 'react-router-dom';
import { useLoading } from './MyLoader';

const SearchDetails = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  const {isLoading, setIsLoading} = useLoading()
  useEffect(() => {
    setIsLoading(true)
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items)
      setIsLoading(false)
    })
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "95vh", flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white"}}>
          Search Results for: <span style={{ color: "#f01111" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
  )
}

export default SearchDetails;