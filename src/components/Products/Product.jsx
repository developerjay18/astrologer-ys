import React from 'react';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';

function Product({ imgUrl, heading, content, buttonTxt }) {
  return (
    <div className="mt-10">
      {/* upper  */}
      <div className="upper">
        <img src={imgUrl} alt="" />
      </div>
      {/* lower  */}
      <div className="lower font-hindi mt-4">
        {/* l-up  */}
        <div className="l-up bg-white py-3 px-5 flex flex-col gap-3 min-h-[22vh]">
          <div className="">
            <h3 className="text-2xl font-bold font-hindi">{heading}</h3>
            <div className="liner w-[58%] h-[1px] bg-gray-400"></div>
          </div>
          <p className="font-normal">{content}</p>
        </div>
        {/* l-down  */}
        <Link to={buttonLink}>
          <div className="l-down mt-2 bg-black text-white text-center py-2 font-semibold text-lg">
            <button>{buttonTxt}</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
