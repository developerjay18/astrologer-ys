import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LGTestData, smallTestData } from './data';

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-intro px-5 lg:px-20 text-white py-10">
      {/* upper  */}
      <div className="upper text-white flex flex-col justify-center items-center gap-5">
        <h3 className="text-5xl lg:text-6xl font-semibold font-poppins text-center lg:text-left">
          What our client says
        </h3>
        <div className="liner w-[65%] lg:w-[48%] h-1 bg-white"></div>
      </div>
      {/* lower  */}
      <div className="lower pt-20 hidden lg:block">
        <Slider {...settings}>
          {LGTestData.map((testPack, index) => (
            <div key={index}>
              {/* 3 Testimonials collector  */}
              <div className="test-pack flex justify-evenly">
                {testPack.map((item, index) => (
                  <div
                    className="test border w-[28%] p-8 bg-white text-black rounded-2xl flex flex-col gap-5 min-h-[60vh]"
                    key={index}
                  >
                    {/* nomral (solo) Testimonial */}
                    <div className="quotes min-h-[6%]">
                      <i className="fa-solid fa-quote-left fa-2xl"></i>
                    </div>
                    <h4 className="text-4xl font-bold min-h-[10%]">
                      {item.title}
                    </h4>
                    <p className="text-lg min-h-[40%]">{item.content}</p>
                    <div className="stars flex gap-1">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </div>
                    <div className="perosna">
                      <div className="name font-semibold">{item.name}</div>
                      <div className="city">{item.city}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* lower (mobile) */}
      <div className="lower pt-14 block lg:hidden">
        <Slider {...settings}>
          {smallTestData.map((item, index) => (
            <div className="" key={index}>
              <div
                className="test border w-[90%] mx-auto p-8 bg-white text-black rounded-2xl flex flex-col gap-5"
                key={index}
              >
                {/* nomral (solo) Testimonial */}
                <div className="quotes min-h-[6%]">
                  <i className="fa-solid fa-quote-left fa-2xl"></i>
                </div>
                <h4 className="text-4xl font-bold min-h-[10%]">{item.title}</h4>
                <p className="text-lg min-h-[40%]">{item.content}</p>
                <div className="stars flex gap-1">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </div>
                <div className="perosna">
                  <div className="name font-semibold">{item.name}</div>
                  <div className="city">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
