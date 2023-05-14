import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'timeago.js';

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '360px'};
  margin-bottom: ${(props) => (props.type === 'sm' ? '30px' : '25px')};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;
`;
const Image = styled.img`
  width: ${(props) => (props.type === 'sm' ? '50%' : '100%')};
  height: ${(props) => (props.type === 'sm' ? '130px' : '202px')};
  background-color: #999;
  flex: 1;
  border-radius: 4px;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '14px'};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === 'sm' && 'none'};
`;
const Text = styled.div``;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h4`
  font-style: 15px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-style: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <Link to={`/video/${video.userId}`} style={{ textDecoration: 'none' }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />
        <Details type={type}>
          <ChannelImage src={channel.img} type={type} />
          <Text>
            <Title>{video.title}</Title>

            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} Views * {format(video.createdAt)}
            </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
