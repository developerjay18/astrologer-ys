import React from 'react';
import Product from './Product';
import { limitedProducts } from './data';

function Products() {
  return (
    <div className="bg-kundali py-20 font-hindi">
      {/* upper  */}
      <div className="upper flex flex-col gap-8 justify-center items-center">
        <h2 className="text-5xl font-extrabold text-[#231f20] font-hindi">
          लैब सर्टिफाइड यंत्र, पेंडेल और रत्न ख़रीदे
        </h2>
        <div className="liner w-[48%] h-[3px] bg-black"></div>
        <div className="banner bg-black text-white w-full text-center py-4 text-2xl font-semibold">
          सभी प्रोडक्ट्स पर फ्री डिलीवरी (गुजरात)
        </div>
      </div>
      {/* middle  */}
      <div className="middle px-20 py-14 flex justify-between">
        {limitedProducts.map((item, index) => (
          <div className="p-item w-[22%]" key={index}>
            <Product {...item} />
          </div>
        ))}
      </div>
      {/* lower  */}
      <div className="lower px-20 flex justify-center">
        <button className="w-[30%] bg-black text-white py-4 flex gap-4 justify-center items-center rounded-full">
          <span className="">
            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          </span>
          <span className="text-xl font-semibold">
            सभी प्रकार के यंत्र और रत्न ख़रीदे
          </span>
        </button>
      </div>
    </div>
  );
}

export default Products;
