import React, { useEffect, useState } from 'react';
//icon
// import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
// import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
//icon
// import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { format } from 'timeago.js';
import Comments from '../../components/Comments';
import { dislike, fetchSuccess, like } from '../../redux/videoSlice';
import { subscription } from '../../redux/userSlice';

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
  VideoFrame,
} from './Style';

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split('/')[2];

  const [channel, setChannel] = useState({});
  //USE EFFECT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);
  //HANDLE LIKE
  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  //HANDLE DISLIKE
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };
  //HANDLE SUBSCRIBE
  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl} controls />
        </VideoWrapper>

        <Title>this is</Title>
        <Details>
          <Info>5000 views . 1 day ago</Info>
          <Buttons>
            <Button onClick={handleLike}>
              Like <ThumbUpIcon />
            </Button>
            <Button onClick={handleDislike}>
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

          <Subscribe onClick={handleSub}>
            {currentUser.subscribedUsers?.includes(channel._id)
              ? 'SUBSCRIBED'
              : 'SUBSCRIBE'}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo._id} />
      </Content>
      <Recommend tags={currentVideo.tags} />
    </Container>
  );
};

export default Video;
