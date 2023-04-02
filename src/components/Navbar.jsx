import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  width: 30%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  padding: 4px 8px;
  background-color: transparent;
  border: 1px solid;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.icon};
`;
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchIcon />
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon />
            <Avatar src={currentUser.img} />
            {currentUser.name}
          </User>
        ) : (
          <Link
            to='signin'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button>
              <AccountCircleIcon />
              Sign in
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
