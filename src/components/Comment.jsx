import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

/* color: ${({ theme }) => theme.text}; */
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Name = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://lh3.googleusercontent.com/a/AGNmyxYlPdTJDwcwmMv8DEYyaL17OIphuq_IwDtdn5Fwag=s288' />
      <Details>
        <Name>
          Nayem islam <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
          blanditiis, sed unde hic nobis soluta!
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
