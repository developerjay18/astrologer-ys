import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ServiceTwo() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col lg:flex-row justify-between"
    >
      <div className="bg-intro px-5 lg:px-20 py-20 text-white flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* left  */}
        <div className="left lg:w-[50%] flex flex-col gap-8 justify-center pt-5">
          <h2 className="text-5xl text-center lg:text-left lg:text-6xl font-semibold">
            योगेश शर्माजी से मुलाकात 1-1
          </h2>
          <p className="text-xl text-center lg:text-left">
            यदि आपके जीवन में कोई समस्या है और आप समाधान चाहते हैं, तो आप इस
            बारे में बात करने के लिए योगेश शर्मा से व्यक्तिगत रूप से मिल सकते
            हैं। इस तरह, आप सहायता प्राप्त कर सकते हैं और अपना जीवन आसान बना
            सकते हैं।
          </p>
          <Link to={buttonLink} className="mx-auto lg:mx-0 w-[60%] lg:w-[40%]">
            <button className="bg-white w-full text-black px-8 text-xl py-2 font-semibold">
              अप्पोइन्मेंट बुक करे
            </button>
          </Link>
        </div>
        {/* right  */}
        <div className="right lg:w-[50%]">
          <img
            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570518/astrologer-ys/dradoz8jlllnipebndru.png"
            alt=""
            className="lg:w-[80%] lg:ml-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceTwo;
