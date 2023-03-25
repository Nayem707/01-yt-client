import React from 'react';
import styled from 'styled-components';
import ytImg from '../img/yt.png';

/* icons */
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import LibraryMusic from '@mui/icons-material/LibraryMusic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
/* icons */

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.icon};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.web};
  }
  ::-webkit-scrollbar-thumb {
    background-color: #405050;
    border-radius: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 20px 30px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-bottom: 20px;
  font-weight: bold;
`;
const Img = styled.img`
  height: 30px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 7.5px 0px;
  color: ${({ theme }) => theme.icon};

  &:hover {
    background-color: ${({ theme }) => theme.soft};
    border-radius: 10px;
  }
`;
const Hr = styled.hr`
  margin: 10px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div`
  color: ${({ theme }) => theme.icon};
`;
const Button = styled.button`
  padding: 4px 8px;
  background-color: transparent;
  border: 1px solid;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const Title = styled.h3`
  font-style: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.icon};
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo>
            <Img src={ytImg} />
            N-TUBE
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Link to='trends' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Item>
            <ExploreIcon />
            Explore
          </Item>
        </Link>
        <Link
          to='subscriptions'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Item>
            <SubscriptionsIcon />
            Subscribe
          </Item>
        </Link>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        {!currentUser && (
          <>
            <Login>
              Sign in to like videos, comment, and subscribe.
              <Link
                to='signin'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Button>
                  <AccountCircleIcon />
                  Sign in
                </Button>
              </Link>
            </Login>
            <Hr />
          </>
        )}
        <Title>Best of NTube</Title>
        <Item>
          <LibraryMusic />
          Music
        </Item>
        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieFilterIcon />
          Movie
        </Item>
        <Item>
          <NewspaperIcon />
          News
        </Item>
        <Item>
          <LiveTvIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon />
          Setting
        </Item>
        <Item>
          <ReportIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? <LightModeIcon /> : <Brightness4Icon />}
          {!darkMode ? 'Light mode' : 'Dark mode'}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
