import React from 'react';
import { Link } from 'react-router-dom';
import { buttonLink } from '../../assets';

function Info() {
  return (
    <div className="px-20 py-10 bg-kundali text-black flex font-hindi justify-evenly about">
      {/* left  */}
      <div className="left w-[45%] flex flex-col gap-8">
        {/* upper  */}
        <div className="upper flex flex-col gap-5">
          <h3 className="text-4xl font-bold">हमारे बारे में</h3>
          <div className="liner w-[80%] h-[2px] bg-black"></div>
          <p className="text-xl font-normal pr-14">
            एस्ट्रो बाय योगेश में आपका स्वागत है, जहां हम सभी के साथ दयालुता और
            समझदारी से पेश आते हैं। योगेश शर्मा अहमदाबाद में एक अनुभवी ज्योतिषी
            हैं, जो 25 वर्षों से अधिक समय से लोगों को जीवन की चुनौतियों से
            निपटने और खुशी पाने में मदद कर रहे हैं।
          </p>
        </div>
        {/* lower  */}
        <div className="lower flex flex-col gap-5">
          <h3 className="text-4xl font-bold">
            योगेश शर्मा, <br /> आपके विश्वसनीय ज्योतिषी
          </h3>
          <p className="pr-14 text-xl font-normal">
            योगेश शर्मा हजारों लोगों की प्रेम, रिश्ते, व्यापार, स्वास्थ्य और धन
            संबंधी समस्याओं का समाधान कर चुके हैं।
          </p>
          <p className="pr-14 text-xl font-normal">
            एक साधारण जगह से शुरू होकर, वह अब एक प्रतिष्ठित ज्योतिषी हैं, जिनका
            हम सभी आदर करते हैं।
          </p>
        </div>
      </div>
      {/* right  */}
      <div className="right w-[45%] flex flex-col justify-end gap-8">
        <h3 className="text-4xl font-bold">
          सकारात्मक परिवर्तन और व्यक्तिगत विकास के लिए आपका मार्ग
        </h3>
        <p className="text-xl font-normal pr-10">
          यहां एस्ट्रो बाय योगेश में, हम सभी के साथ सम्मानपूर्वक व्यवहार करने
          में विश्वास करते हैं। योगेश शर्मा कठिन समय में आपका मार्गदर्शन करने और
          समाधान खोजने में मदद करने के लिए यहां हैं।
        </p>
        <p className="text-xl font-normal pr-10">
          सकारात्मक बदलाव और व्यक्तिगत विकास की यात्रा पर हमारे साथ जुड़ें। आइए
          मिलकर आपके जीवन को थोड़ा उज्जवल बनाएं!
        </p>
        <p className="text-xl font-normal pr-10">
          कंसल्टेशन बुक करे और अपनी समस्याओ का समाधान पाए |
        </p>
        <Link to={buttonLink} className="w-[45%]">
          <button className="bg-black w-full text-white text-xl px-8 py-2 font-semibold">
            कंसल्टेशन बुक करे
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Info;
