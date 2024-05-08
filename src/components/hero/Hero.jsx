import React from 'react';
import Navbar from '../general/Navbar';
const Hero = () => {
  return (
    <header
      className="hero"
      style={{
        background:
          "linear-gradient(to bottom,rgba(3, 174, 210, 0.5) 90%,rgba(3, 174, 210, 0.5)),url('images/blake-wisz-tE6th1h6Bfk-unsplash.jpg') no-repeat center/cover",
      }}
    >
      <Navbar />
    </header>
  );
};

export default Hero;
