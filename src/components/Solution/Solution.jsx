import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LGSolData } from './data';

function Solution() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-banner px-20 py-10 text-white font-hindi services">
      {/* upper  */}
      <div className="upper text-white flex flex-col justify-center items-center gap-5">
        <h3 className="text-6xl font-semibold">सभी समस्याओं का समाधान</h3>
        <div className="liner w-[48%] h-1 bg-white"></div>
      </div>
      {/* lower  */}
      <div className="lower pt-20">
        {/* main slider  */}
        <Slider {...settings}>
          {LGSolData.map((dataPack, index) => (
            <div key={index}>
              {/* sol pack  */}
              <div className="sols flex justify-evenly">
                {dataPack.map((item, index) => (
                  <div
                    className="sol min-h-[60vh] w-[28%] border-2 py-5 flex flex-col gap-3"
                    key={index}
                  >
                    <h3 className="text-center text-3xl font-poppins min-h-[10%]">
                      {item.title}
                    </h3>
                    <div className="image min-h-[50%] max-h-[40%] flex justify-center items-center">
                      <img
                        src={item.imgUrl}
                        alt=""
                        className="w-[50%] mx-auto"
                      />
                    </div>
                    <p className="px-10 text-lg font-hindi">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Solution;
