import React from 'react';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';

function ServiceTwo() {
  return (
    <div className="bg-intro px-20 py-20 text-white flex">
      {/* left  */}
      <div className="left w-[50%] flex flex-col gap-8 justify-center pt-5">
        <h2 className="text-6xl font-semibold">योगेश शर्माजी से मुलाकात 1-1</h2>
        <p className="text-xl">
          यदि आपके जीवन में कोई समस्या है और आप समाधान चाहते हैं, तो आप इस बारे
          में बात करने के लिए योगेश शर्मा से व्यक्तिगत रूप से मिल सकते हैं। इस
          तरह, आप सहायता प्राप्त कर सकते हैं और अपना जीवन आसान बना सकते हैं।
        </p>
        <Link to={buttonLink} className="w-[40%]">
          <button className="bg-white w-full text-black px-8 text-xl py-2 font-semibold">
            अप्पोइन्मेंट बुक करे
          </button>
        </Link>
      </div>
      {/* right  */}
      <div className="right w-[50%]">
        <img
          src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570518/astrologer-ys/dradoz8jlllnipebndru.png"
          alt=""
          className="w-[80%] ml-auto"
        />
      </div>
    </div>
  );
}

export default ServiceTwo;
