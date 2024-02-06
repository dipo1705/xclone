//import React from 'react';
import TopTweets from '../assets/Timeline-Prop.png'

function Header() {
  return (
    <>
      <div className='header'>
        <h1 className='page-title'>Home</h1>
        <img src={TopTweets} alt='TopTweets' className='top-tweets' />
      </div>
    </>
  );
}

export default Header;