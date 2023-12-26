import React from 'react';
import { logo } from '../../assets';

function Banner() {
  return (
    <div className="bg-banner text-white">
      <img src={logo} alt="" className="w-[80%] mx-auto py-10" />
    </div>
  );
}

export default Banner;
