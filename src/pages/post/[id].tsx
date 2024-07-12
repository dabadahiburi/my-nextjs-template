import { PostContext } from '@/context/PostContext';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, {useContext,useEffect}from 'react';

interface PostProps{
  post: { id: number; title: string; body: string } | null;
}

// const Post = ({ post }) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// };

const Post: React.FC<PostProps> = ({ post }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(PostContext);
  console.log('router:', router);
  console.log('post:', post);

  useEffect(() => {
    if (post) {
      dispatch({ type: 'ADD_POST', payload: post });
    }
  }, [post, dispatch]);

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>No post found</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

// export async function getStaticPost() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = await res.json();

//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/${params.id}');
//   const post = await res.json();
  
//   return {
//     props: { post },
//   };
// }

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    
    //デバック用
    console.log('posts:', posts);

    const paths = posts.map((post:{id: number}) => ({
      params: { id: post.id.toString() },
    }));

      return { paths, fallback: true };
  }　catch (error) {
      console.error('Error feching posts:', error);
      return { paths: [], fallback: true };
    }
  };

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
     // paramsがnullまたはundefinedの場合、idはundefinedになる
    const id = params?.id;

    // paramsがundefinedの場合、エラーログを出力して処理を中断する例外処理を記述する
    if (!id) {
      throw new Error('No id parameter provided');
    }

    console.log('Fetching post with id:', id);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    if (!res.ok) {
      console.error('Failed to fetch post:', res.statusText);
      return { props: { post: null } };
    }
    const post = await res.json();
    
    // デバッグ用ログ
    console.log('fetched post:', post);

    return {
        props: {
          post: post || null,
        },
    };
    
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: { post: null },
    };
  };
};

export default Post;