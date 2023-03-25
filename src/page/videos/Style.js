import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 10px 40px;
`;
const Content = styled.div`
  flex: 3;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0px 8px 0px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.textSoft};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
`;
const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`;
const Recommend = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 13px;
`;
const ChannelDesc = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: red;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 8px 18px;
  cursor: pointer;
`;
export {
  Container,
  Content,
  VideoWrapper,
  Title,
  Details,
  Info,
  Buttons,
  Button,
  Hr,
  Recommend,
  Channel,
  ChannelInfo,
  Image,
  ChannelDetail,
  ChannelName,
  ChannelCounter,
  ChannelDesc,
  Subscribe,
};
