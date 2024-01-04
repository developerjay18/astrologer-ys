import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

function Stats() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  const statsData = [
    {
      number: '25',
      extra: '+',
      title: 'वर्षो का अनुभव ज्योतिषविद्या में',
    },
    {
      number: '1000',
      extra: '+',
      title: 'वैश्विक स्तर पर हैप्पी क्लाइंट्स',
    },
    {
      number: '5',
      extra: 'star',
      title: 'रेटेड ज्योतिषी सभी प्लेटफ़ॉर्म पर',
    },
  ];

  return (
    <div className="bg-black text-black bg-kundali py-10">
      <div className="w-full flex container px-5 lg:px-0 mx-auto py-10 justify-between br-gradient flex-col md:flex-row flex-wrap gap-12 md:gap-0 lg:gap-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="w-full flex justify-around flex-row flex-wrap md:flex-row gap-12 md:gap-0"
        >
          {statsData.map((data) => (
            <div
              id="count-up-section"
              className="text-center font-poppins lg-text-left lg:w-[20%] flex"
              key={data.number}
            >
              {isVisible && (
                <div className="flex flex-col gap-6 md:py-5 lg:py-0">
                  <div className=" text-5xl lg:text-6xl text-gradient font-semibold ">
                    <span>
                      <CountUp
                        start={0}
                        end={data.number}
                        duration={7}
                        className="font-bold"
                      />
                    </span>
                    <span>{data.extra}</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-hindi capitalize font-semibold px-20 lg:px-0">
                    {data.title}
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Stats;
