import { useRouter } from 'next/router';
import React from 'react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Post: {id}</h1>
      <p>This is adynamic route for post {id}.</p>
    </div>
  );
};

export default Post;