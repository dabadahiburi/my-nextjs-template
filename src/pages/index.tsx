// pages/index.js
import React,{useContext,useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PostContext } from '../context/PostContext';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  const { state, dispatch } = useContext(PostContext);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await fetch('/api/posts');
  //     const data = await res.json();
  //     dispatch({ type: 'SET_POSTS', payload: data });
  //   };

  //   fetchPost();
  // }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    });
    const newPost = await res.json();
    dispatch({ type: 'ADD_POST', payload: newPost });
  };

  return (
    <div>
      <h1>Welcome to My Next.js Template</h1>
      <p>This is the home page</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Title'
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='Body'
          required
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
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
