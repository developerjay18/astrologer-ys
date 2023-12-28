import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { Link as SLink } from 'react-scroll';
import { buttonLink } from '../../assets';

function Heros() {
  return (
    <div className="pt-[12rem] pb-10 lg:pb-20 bg-hero text-white px-5 lg:px-20 font-poppins flex flex-col lg:flex-row">
      {/* left  */}
      <div className="left lg:w-[60%] flex flex-col gap-8 justify-center">
        {/* heading  */}
        <h1 className="text-5xl leading-[4rem] font-semibold text-center lg:text-left">
          <span>समस्याओं का सटीक समाधान</span>
          <div className="flex flex-col lg:flex-row gap-2">
            <span>पाएं -</span>
            <span>
              <Typewriter
                options={{
                  strings: [
                    'लव प्रोब्लेम्स',
                    'बिज़नेस प्रोब्लेम्स',
                    'वास्तु प्रोब्लेम्स',
                    'हेल्थ प्रोब्लेम्स',
                    'रिलेशनशिप प्रोब्लेम्स ',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                  cursor: '|',
                  cursorClassName: 'text-Purple',
                }}
              />
            </span>
          </div>
        </h1>
        {/* content  */}
        <p className="lg:pr-10 text-xl text-center lg:text-left">
          मिलिए योगेश शर्मा जी से, जो अहमदाबाद - इंडिया में 25 वर्षो से ज्योतिष
          विद्या द्वारा हजारो लोगो की समस्याए हल कर रहे है। उन्होंने लोगो की
          जीवन में आने वाली समस्याओ का समाधान किया है और उन्हें मार्गदर्शन दिया
          है।
        </p>
        {/* buttons  */}
        <div className="flex items-center gap-5 lg:gap-10 flex-col lg:flex-row">
          <Link to={buttonLink}>
            <button className="bg-white text-black px-8 py-2 font-semibold">
              कंसल्टेशन बुक करे
            </button>
          </Link>
          <SLink to={'kundali'}>
            <button className="bg-transparent border-2 px-12 py-2 font-semibold">
              कुंडली बनवाए{' '}
            </button>
          </SLink>
        </div>
      </div>
      {/* right  */}
      <div className="right mt-10 lg:mt-0 w-[100%] lg:w-[35%]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <img
            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570576/astrologer-ys/xvs0ul7wfir7uewf0e3a.png"
            alt=""
            className=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Heros;
