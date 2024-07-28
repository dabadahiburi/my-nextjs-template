import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/about.css';
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('×');
  }
  return(
    <button
      className='square'
      onClick={handleClick}>
      
      {value}
    </button>
    )
}

export default function Board() {
  return (
    <div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square/>
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square/>
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
    
  )
}

