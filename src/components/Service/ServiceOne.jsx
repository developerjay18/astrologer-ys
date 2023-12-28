import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ServiceOne() {
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
      <div className="flex bg-kundali px-5 lg:px-20 py-10 lg:py-20 border-black flex-col lg:flex-row">
        {/* left  */}
        <div className="left lg:w-[50%]">
          <img
            src="https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570615/astrologer-ys/j8f3jto429jcw31clfhi.png"
            alt=""
            className="lg:w-[80%] lg:ml-6"
          />
        </div>
        {/* right  */}
        <div className="right lg:w-[50%] font-hindi flex flex-col gap-8 justify-center pt-5">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#2b2a2a] leading-[4rem] text-center lg:text-left">
            रियल एस्टेट के लिए वास्तु कन्सल्टेशन{' '}
          </h2>
          <p className="text-lg font-semibold text-center lg:text-left">
            ज्योतिषी योगेश शर्मा की सलाह से अपना जीवन सुधारें। वह आपके स्थान को
            सकारात्मक और आपकी खुशहाली के लिए अच्छा बनाने के लिए वास्तु और
            ज्योतिष का संयोजन करते हैं। सकारात्मक बदलावों का अनुभव करें!
          </p>
          <Link to={buttonLink} className="mx-auto lg:mx-0 w-[60%] lg:w-[35%]">
            <button className="bg-black w-full text-white text-lg px-8 py-2 font-semibold">
              अप्पोइन्मेंट बुक करे
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceOne;
