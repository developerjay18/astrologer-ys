import React from 'react';
import { PPData } from './data';

function PpHero() {
  return (
    <div>
      {/* upper  */}
      <div className="upper pt-[12rem] px-20 font-hindi">
        <h3 className="text-5xl text-center font-bold">
          एस्ट्रो बाय योगेश प्राइवेसी पॉलिसी:
        </h3>
        <div className="liner h-[1px] my-5 bg-black"></div>
      </div>
      {/* lower  */}
      <div className="lower px-[10rem] py-10 flex flex-col gap-10">
        {/* one  */}
        <div className="text-xl flex flex-col gap-5">
          <p>
            यह गोपनीयता नीति बताती है कि जब आप astrobyyogesh.com
            (&quot;साइट&quot;) पर जाते हैं या खरीदारी करते हैं तो आपकी व्यक्तिगत
            जानकारी कैसे एकत्र, उपयोग और साझा की जाती है।
          </p>
        </div>
        {/* two and loops  */}
        {PPData.map((item, index) => (
          <div className=" flex-col flex gap-3" key={index}>
            <h4 className="font-bold text-3xl">{item.title}</h4>
            <div className="flex flex-col gap-5 text-xl">
              {item.content.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PpHero;
