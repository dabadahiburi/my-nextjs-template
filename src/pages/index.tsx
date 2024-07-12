// pages/index.js
import React,{useContext,useEffect} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PostContext } from '../context/PostContext';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  const { state, dispatch } = useContext(PostContext);
  
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      dispatch({ type: 'SET_POSTS', payload: data });
    };

    fetchPost();
  }, [dispatch]);
  return (
    <div>
      <h1>Welcome to My Next.js Template</h1>
      <p>This is the home page</p>
      <ul>
        {state.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <p>{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
