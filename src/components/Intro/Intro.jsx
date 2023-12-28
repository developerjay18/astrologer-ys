import React from 'react';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';

function Intro() {
  return (
    <div className="bg-intro px-20 text-white py-24 flex">
      {/* left  */}
      <div className="left w-[50%] font-hindi flex flex-col gap-8 justify-center">
        <h2 className="text-6xl leading-[4.5rem] font-semibold">
          अपने सभी सवालो के उत्तर पाइये{' '}
        </h2>
        <p className="text-xl pr-20">
          यदि आप जीवन में फंसा हुआ महसूस कर रहे हैं और नहीं जानते कि क्या करें,
          तो योगेश शर्मा जी से कॉल पर बात करना एक अच्छा विचार है।
        </p>
        <Link to={buttonLink} className="w-[40%]">
          <button className="bg-white w-full text-black px-8 py-2 text-xl font-semibold">
            कॉल बुक करे ₹199
          </button>
        </Link>
      </div>
      {/* right  */}
      <div className="right w-[50%]">
        <img
          src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570622/astrologer-ys/uif9rfan6qyeumyopjsk.png"
          alt=""
          className="w-[70%] ml-auto"
        />
      </div>
    </div>
  );
}

export default Intro;
