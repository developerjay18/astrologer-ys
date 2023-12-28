import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Intro() {
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
      <div className="bg-intro px-5 lg:px-20 text-white py-24 flex flex-col lg:flex-row gap-10 lg:gap-0">
        {/* left  */}
        <div className="left lg:w-[50%] font-hindi flex flex-col gap-8 justify-center">
          <h2 className="lg:text-6xl text-5xl leading-[4.5rem] font-semibold text-center lg:text-left">
            अपने सभी सवालो के उत्तर पाइये{' '}
          </h2>
          <p className="text-xl lg:pr-20 text-center lg:text-left">
            यदि आप जीवन में फंसा हुआ महसूस कर रहे हैं और नहीं जानते कि क्या
            करें, तो योगेश शर्मा जी से कॉल पर बात करना एक अच्छा विचार है।
          </p>
          <Link to={buttonLink} className="mx-auto lg:mx-0 w-[70%] lg:w-[40%]">
            <button className="bg-white w-full text-black px-8 py-2 text-xl font-semibold">
              कॉल बुक करे ₹199
            </button>
          </Link>
        </div>
        {/* right  */}
        <div className="right lg:w-[50%]">
          <img
            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570622/astrologer-ys/uif9rfan6qyeumyopjsk.png"
            alt=""
            className="lg:w-[70%] ml-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Intro;
