import React from 'react';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';

function ServiceOne() {
  return (
    <div className="flex bg-kundali px-20 py-20 border-black">
      {/* left  */}
      <div className="left w-[50%]">
        <img
          src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570615/astrologer-ys/j8f3jto429jcw31clfhi.png"
          alt=""
          className="w-[80%] ml-6"
        />
      </div>
      {/* right  */}
      <div className="right w-[50%] font-hindi flex flex-col gap-8 justify-center pt-5">
        <h2 className="text-6xl font-bold text-[#2b2a2a]">
          रियल एस्टेट के लिए वास्तु कन्सल्टेशन{' '}
        </h2>
        <p className="text-lg font-semibold">
          ज्योतिषी योगेश शर्मा की सलाह से अपना जीवन सुधारें। वह आपके स्थान को
          सकारात्मक और आपकी खुशहाली के लिए अच्छा बनाने के लिए वास्तु और ज्योतिष
          का संयोजन करते हैं। सकारात्मक बदलावों का अनुभव करें!
        </p>
        <Link to={buttonLink} className="w-[35%]">
          <button className="bg-black w-full text-white text-lg px-8 py-2 font-semibold">
            अप्पोइन्मेंट बुक करे
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceOne;
