import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { FetchFromAPI } from "../utils/FetchFromApi";
import { ChannelCard, Videos } from "./";
import { useLoading } from "./MyLoader";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channels, setChannels] = useState();
  const [videos, setVideos] = useState([]);
  const {isLoading, setIsLoading} = useLoading()
  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true)
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannels(data?.items[0]);

      const videosData = await FetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
      setIsLoading(false)
    };
    fetchResults();

  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(255,0,99,1) 100%)",
            zIndex: "10",
            height: "250px",
          }}
        />
        <ChannelCard channelDetail={channels} marginTop="-150px"/>
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{mr: {sm: "150px"}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetails;
