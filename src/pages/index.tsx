// pages/index.js
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Welcome to My Next.js Template</h1>
        <p>This is the home page</p>
        <Link href="/about">
          About Page
        </Link>
        <br />
        <Link href="/post/1">
          Post 1
        </Link>
        <br />
        <Link href="/post/2">
          Post 2
        </Link>
      </div>
    </Container>
  );
};

export default Home;
