import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PostProvider } from '../context/PostContext';

function Myapp({Component,pageProps}:AppProps) {
  return (
    <PostProvider>
      <Component{...pageProps} />
    </PostProvider>
  );
}

export default Myapp;