import React, { useEffect, useState } from 'react';
//icon
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
//icon
import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { format } from 'timeago.js';
import Comments from '../../components/Comments';
import { dislike, fetchSuccsess, like } from '../../redux/videoSlice';

import {
  Container,
  Content,
  VideoWrapper,
  Title,
  Details,
  Info,
  Buttons,
  Button,
  Recommend,
  Hr,
  Channel,
  ChannelInfo,
  Image,
  ChannelDetail,
  ChannelName,
  ChannelCounter,
  ChannelDesc,
  Subscribe,
} from './Style';

const Video = () => {
  const { currentUser } = useSelector((state) => ({
    currentUser: state.user.currentUser,
  }));
  const { currentVideo } = useSelector((state) => ({
    currentVideo: state.video.currentVideo,
  }));
  console.log(currentVideo, 'currentVideo');

  const dispatch = useDispatch();

  const path = useLocation().pathname.split('/')[2];
  console.log(path);
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        console.log(videoRes);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        console.log(channelRes);
        setChannel(channelRes.data);
        dispatch(fetchSuccsess(videoRes.userId));
      } catch (error) {}
    };
    fetchData();
  }, [path, dispatch]);

  const handleLikes = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDisLikes = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height='400'
            src='https://www.youtube.com/embed/tgbNymZ7vqY?controls=0'
            title='yt video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypt-media;gyroscope; picture-in-picture'
            allowFullScreen
            controls
          />
        </VideoWrapper>

        <Title>this is</Title>
        <Details>
          <Info>5000 views . 1 day ago</Info>
          <Buttons>
            <Button onClick={handleLikes}>
              Like <ThumbUpIcon />
            </Button>
            <Button onClick={handleDisLikes}>
              Dislike
              <ThumbDownAltIcon />
            </Button>
            <Button>
              <ShareIcon />
              Share
            </Button>
            <Button>
              <PlaylistAddIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />

        <Channel>
          <ChannelInfo>
            <Image src={channel.img} alt='' />

            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>

              <ChannelCounter>{channel.subscribers}subscribers</ChannelCounter>

              <ChannelDesc>this is descroption</ChannelDesc>
            </ChannelDetail>
          </ChannelInfo>

          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      {/* <Recommend>
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
        <Card type='sm' />
      </Recommend> */}
    </Container>
  );
};

export default Video;
