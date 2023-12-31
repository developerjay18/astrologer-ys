import React from 'react';
import Product from './Product';
import { limitedProducts } from './data';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className="bg-kundali py-20 font-hindi">
      {/* upper  */}
      <div className="upper lg:px-0 flex flex-col gap-8 justify-center items-center">
        <h2 className="text-5xl font-extrabold text-[#231f20] font-hindi text-center leading-[4rem] px-5 lg:px-0">
          लैब सर्टिफाइड यंत्र, पेंडेल और रत्न ख़रीदे
        </h2>
        <div className="liner w-[80%] lg:w-[48%] h-[3px] bg-black"></div>
        <div className="banner bg-black text-white w-full text-center py-4 text-2xl font-semibold">
          सभी प्रोडक्ट्स पर फ्री डिलीवरी (गुजरात)
        </div>
      </div>
      {/* middle  */}
      <div className="middle lg:px-20 px-5 py-10 lg:py-14 flex flex-col lg:flex-row justify-between">
        {limitedProducts.map((item, index) => (
          <div className="p-item lg:w-[22%]" key={index}>
            <Product {...item} />
          </div>
        ))}
      </div>
      {/* lower  */}
      <div className="lower px-5 lg:px-20 flex justify-center">
        <Link to={'/products'} className="lg:w-[30%]">
          <button className="w-full bg-black text-white py-4 flex gap-4 justify-center items-center rounded-full px-5 lg:px-0">
            <span className="">
              <i className="fa-solid fa-cart-shopping fa-2xl"></i>
            </span>
            <span className="text-xl font-semibold">
              सभी प्रकार के यंत्र और रत्न ख़रीदे
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Products;
