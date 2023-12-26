import React from 'react';
import points from './data';

function Kundalis() {
  return (
    <div className="bg-kundali px-20 py-10 flex">
      {/* left  */}
      <div className="left w-[50%]">
        <img
          src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570511/astrologer-ys/ub7uo3ieorppwwmhdrrs.png"
          alt=""
          className="w-[75%]"
        />
      </div>
      {/* right  */}
      <div className="right border w-[50%] font-hindi flex flex-col gap-9 justify-center">
        <h2 className="text-6xl font-bold leading-[5rem] text-[#2b2a2a]">
          अपनी सम्पूर्ण विगतवार कुंडली बनवाए{' '}
        </h2>
        <ul>
          {points.map((item, index) => (
            <li
              key={index}
              style={{ listStyle: 'inside' }}
              className="text-lg font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="bg-black w-[43%] text-white px-8 py-2 text-xl font-semibold">
          कुंडली बनवाए ₹199
        </button>
      </div>
    </div>
  );
}

export default Kundalis;
