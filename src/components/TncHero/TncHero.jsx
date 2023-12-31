import React from 'react';
import { TNCData } from './data';

function TncHero() {
  return (
    <div>
      {/* upper  */}
      <div className="upper pt-[12rem] px-5 lg:px-20 font-hindi">
        <h3 className="text-5xl text-center font-bold">अवलोकन</h3>
        <div className="liner h-[1px] my-5 bg-black"></div>
      </div>
      {/* lower  */}
      <div className="lower px-5 lg:px-[10rem] py-10 flex flex-col gap-10">
        {/* one  */}
        <div className="text-xl flex flex-col gap-5">
          <p>
            यह वेबसाइट एस्ट्रो बाय योगेश द्वारा संचालित है। पूरी साइट पर, शब्द
            &quot;हम&quot;, &quot;हमें&quot; और &quot;हमारा&quot; योगेश द्वारा
            एस्ट्रो को संदर्भित करते हैं। एस्ट्रो बाय योगेश इस वेबसाइट की पेशकश
            करता है, जिसमें इस साइट पर उपलब्ध सभी जानकारी, उपकरण और सेवाएं शामिल
            हैं, जो आपके उपयोगकर्ता के लिए यहां बताए गए सभी नियमों, शर्तों,
            नीतियों और नोटिसों की आपकी स्वीकृति पर आधारित हैं।
          </p>
          <p>
            हमारी साइट पर जाकर और/या हमसे कुछ खरीदकर, आप हमारी &quot;सेवा&quot;
            में संलग्न होते हैं और उन अतिरिक्त नियमों और शर्तों और नीतियों सहित
            निम्नलिखित नियमों और शर्तों (&quot;सेवा की शर्तें&quot;,
            &quot;शर्तें&quot;) से बंधे होने के लिए सहमत होते हैं। यहां संदर्भित
            और/या हाइपरलिंक द्वारा उपलब्ध है। सेवा की ये शर्तें साइट के सभी
            उपयोगकर्ताओं पर लागू होती हैं, जिनमें बिना किसी सीमा के ब्राउज़र,
            विक्रेता, ग्राहक, व्यापारी और/या सामग्री के योगदानकर्ता शामिल हैं।
          </p>
          <p>
            कृपया हमारी वेबसाइट तक पहुंचने या उपयोग करने से पहले सेवा की इन
            शर्तों को ध्यान से पढ़ें। साइट के किसी भी हिस्से तक पहुंच या उपयोग
            करके, आप इन सेवा की शर्तों से बंधे होने के लिए सहमत हैं। यदि आप इस
            अनुबंध के सभी नियमों और शर्तों से सहमत नहीं हैं, तो आप वेबसाइट तक
            नहीं पहुंच सकते हैं या किसी भी सेवा का उपयोग नहीं कर सकते हैं। यदि
            सेवा की इन शर्तों को एक प्रस्ताव माना जाता है, तो स्वीकृति स्पष्ट
            रूप से इन सेवा की शर्तों तक ही सीमित है।
          </p>
          <p>
            कोई भी नई सुविधाएँ या उपकरण जो वर्तमान स्टोर में जोड़े जाते हैं, वे
            भी सेवा की शर्तों के अधीन होंगे। आप इस पृष्ठ पर किसी भी समय सेवा की
            शर्तों के नवीनतम संस्करण की समीक्षा कर सकते हैं। हम अपनी वेबसाइट पर
            अपडेट और/या बदलाव पोस्ट करके सेवा की इन शर्तों के किसी भी हिस्से को
            अपडेट करने, बदलने या बदलने का अधिकार सुरक्षित रखते हैं। परिवर्तनों
            के लिए इस पृष्ठ की समय-समय पर जाँच करना आपकी ज़िम्मेदारी है। किसी भी
            परिवर्तन की पोस्टिंग के बाद वेबसाइट का आपका निरंतर उपयोग या उस तक
            पहुंच उन परिवर्तनों की स्वीकृति मानी जाएगी।
          </p>
          <p>
            हमारा स्टोर शॉपिफाई इंक पर होस्ट किया गया है। वे हमें ऑनलाइन
            ई-कॉमर्स प्लेटफॉर्म प्रदान करते हैं जो हमें आपको अपने उत्पाद और
            सेवाएं बेचने की अनुमति देता है।
          </p>
        </div>
        {/* two and loops  */}
        {TNCData.map((item, index) => (
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

export default TncHero;
