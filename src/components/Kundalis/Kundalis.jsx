import React, { useEffect } from 'react';
import points from './data';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Kundalis() {
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
      <div className="bg-kundali px-5 lg:px-20 py-10 flex flex-col lg:flex-row kundali gap-10 lg:gap-0">
        {/* left  */}
        <div className="left lg:w-[50%]">
          <img
            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570511/astrologer-ys/ub7uo3ieorppwwmhdrrs.png"
            alt=""
            className="lg:w-[75%]"
          />
        </div>
        {/* right  */}
        <div className="right border lg:w-[50%] font-hindi flex flex-col gap-9 justify-center">
          <h2 className="text-5xl lg:text-6xl font-bold leading-[4rem] lg:leading-[5rem] text-[#2b2a2a] text-center lg:text-left">
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
          <Link to={buttonLink} className="mx-auto lg:mx-0 w-[80%] lg:w-[43%]">
            <button className="bg-black w-full text-white px-8 py-2 text-xl font-semibold">
              कुंडली बनवाए ₹1100
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Kundalis;
