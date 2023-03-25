import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccsess } from '../../redux/userSlice';

import { auth, provider } from '../../firebase';

import { signInWithPopup } from 'firebase/auth';
import { async } from '@firebase/util';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 6px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;
const Title = styled.h2`
  font-size: 20px;
`;
const SubTitle = styled.h3`
  font-weight: 400;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.icon};
`;
const More = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 10px;
  color: ${({ theme }) => theme.icon};
`;
const Links = styled.div`
  margin-left: 10px;
`;
const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('/auth/signin', { name, password });
      dispatch(loginSuccsess(res.data));
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const signinWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        axios
          .post('/auth/google', {
            name: result.user.displayName,
            email: result.user.email,
            img: result.user.photoURL,
          })
          .then((res) => {
            dispatch(loginSuccsess(res.data));
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>To Continue to N-TUBE</SubTitle>
        <Input
          placeholder='user Email'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type='password'
          placeholder='user password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>Or</Title>
        <Title>
          <Button onClick={signinWithGoogle}>Sign in With Google</Button>
        </Title>

        <Input
          placeholder='user name'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='user Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='user password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Submit</Button>
      </Wrapper>
      <More>
        English (USA)
        <Links>
          <Link>Help</Link>
          <Link>Privecy</Link>
          <Link>Tearms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
