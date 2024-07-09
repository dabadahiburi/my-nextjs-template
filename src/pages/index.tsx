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
        <Link href="/">
          Gp back to Home
        </Link>  
      </div>
    </Container>
  );
};

export default Home;
