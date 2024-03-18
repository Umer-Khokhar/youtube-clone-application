import React, { useContext } from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';
import {Loading} from "../loader/Loading";
import { useLoading } from './MyLoader';

const Videos = ( {videos, direction} ) => {
  const {isLoading, setIsLoading} = useLoading();
  if (!videos) return <Loading />
  
  // console.log(videos)
  return (
    <>
    {isLoading ? (
      <Loading />
      ) : (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="center" gap={2} sx={{ width: {xs: "100%", sm: "100%", md: "100%" }, margin: 'auto'}}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} /> }
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
      )}
      </>
  )
}

export default Videos