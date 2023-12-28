import React from 'react';
import Product from '../Products/Product';
import { allProducts } from './data';

function ProductHero() {
  return (
    <div className="bg-products py-[12rem]">
      {/* upper  */}
      <div className="upper text-5xl font-extrabold flex flex-col gap-3 justify-center items-center">
        <h2 className="">लैब सर्टिफाइड यंत्र, पेंडेल और स्टोन ख़रीदे </h2>
        <div className="liner w-[60%] h-[2px] bg-black mt-5"></div>
        <div className="banner bg-black py-3 mt-5 text-center text-white text-xl w-full">
          सभी प्रोडक्ट्स पर फ्री डिलीवरी (गुजरात)
        </div>
      </div>
      {/* lower (all products are listed here) */}
      <div className="lower px-20">
        <div className="list flex justify-between flex-wrap">
          {allProducts.map((item, index) => (
            <div className="item w-[30%] mt-10" key={index}>
              <Product {...item} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductHero;
