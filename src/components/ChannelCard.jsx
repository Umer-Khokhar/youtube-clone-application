import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link} from "react-router-dom";
import { demoProfilePicture, demoThumbnailUrl } from '../utils/constants';


const ChannelCard = ({channelDetail, marginTop}) => {

  return (
    <Card sx={{width: {xs: "100vw", sm: "358px", md: "310px"}, maxWidth: {xs: "100vw", sm: "358px", md: "310px"},boxShadow: "none",  justifyContent: "center", alignItems: "center", background: "transparent", margin: "auto", marginTop}}>
      <Link to={channelDetail?.id?.channelId ? `/channel/${channelDetail?.id?.channelId}`: demoThumbnailUrl }  style={{margin: "0 auto"}}>
      </Link>
      <Link to={channelDetail?.id?.channelId ? `/channel/${channelDetail?.id?.channelId}`: demoThumbnailUrl}>
        <CardContent>
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} sx={{width: {xs: "250px", sm: "250px", md: "250px"}, height: {xs: '250px', sm: "250px", md: "250px"}, borderRadius: "50%", margin:"0 auto" }} />
          <Typography variant='h6' sx={{ color: "white", textAlign: 'center' }}>
            {channelDetail?.snippet?.title}
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default ChannelCard