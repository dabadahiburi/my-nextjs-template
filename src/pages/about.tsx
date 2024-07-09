import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Link href="/">
        <p>Go back to Home</p>
      </Link>
    </div>
  );
};

export default About;
