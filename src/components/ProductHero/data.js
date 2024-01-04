const allProducts = [
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570586/astrologer-ys/luvgui5crgnkj6yktoay.png',
    heading: 'सन्तानगोपाल यंत्र',
    content:
      'जो पति पत्नी निःसंतान हो अथवा उनकी संतान बार बार बीमार रहती हो उनके लिए',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570554/astrologer-ys/zwdjqusdae2yusiorvj5.png',
    heading: 'मंगलपूजा यंत्र',
    content:
      'जिनकी कुंडली में मंगल दोष हो अथवा जिनकी कुंडली में लग्नेश मंगल गृह हो उनके लिए ',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570563/astrologer-ys/wabaxu0fcjtocgoctrhe.png',
    heading: 'व्यापरवृद्धि यंत्र',
    content:
      'जिनके व्यपार में निरंतर बाधाए आती हो , या जिनका व्यापर मंदा चल रहा हो उनके लिए',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570598/astrologer-ys/zw43qnulwweti6m5yqmu.png',
    heading: 'आद्यशक्ति विशा यंत्र',
    content: 'जिनके घर में कुलदेवी दोष हो, कुलदेवी जागरूक न हो उनके लिए ',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570591/astrologer-ys/vm8wjxdvjhhvtzphwlpu.png',
    heading: 'पितृदोष निवारण यंत्र',
    content: 'जिनके घर में पितृदोष हो, जिनके  पितृ अतृप्त हो उनकी शांति के लिए',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570586/astrologer-ys/eskknong29hhilwftojl.png',
    heading: 'मंगलदेव पूजन यंत्र ',
    content:
      'जिनकी कुंडली में मंगल दोष हो अथवा जिनकी कुंडली में लग्नेश मंगल गृह हो उनके लिए ',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570618/astrologer-ys/bzs3crdacry8dkmqieqi.png',
    heading: 'नवग्रह महायंत्र',
    content: 'सभी ग्रहो की शांति कराने के लिए ',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570623/astrologer-ys/pwkfhiw5ry5en9q1ljok.png',
    heading: 'राहुदेव पूजन यंत्र',
    content: 'जिनकी कुंडली में राहु दोष हो, उनके लिए ',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570614/astrologer-ys/nyiunb48jldsyczeomom.png',
    heading: 'गृहदोष निवारण वास्तुचक्र यंत्र',
    content: 'जिनके घर में वास्तु दोष हो उनके लिए ',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570603/astrologer-ys/rotcxcbqmcinl7wq1gca.png',
    heading: 'श्री मारुती यंत्र',
    content: 'जिनके घर में भूत प्रेत आत्माओ की बाधा हो  उनके लिए ',
    buttonTxt: 'अभी ख़रीदे ₹551/-*',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570597/astrologer-ys/locoes3spg7122mw8zdi.png',
    heading: 'राहु - गोमेदक',
    content: 'जिनकी कुंडली में राहु दोष हो, या राहु की दशा चल रही हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570599/astrologer-ys/iscxf1o0hfr8or9esq4a.png',
    heading: 'केतु - वैदूर्य',
    content:
      'जिनकी कुंडली में केतु की दशा चल रही हो , या केतु लग्नेश हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570606/astrologer-ys/jjzfnplddbab8kaomem2.png',
    heading: 'चंद्र मोती',
    content:
      'जिनकी कुंडली में चंद्र लग्नेश हो या चंद्र की महादशा चल रही हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे ',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570604/astrologer-ys/utsf3mguataajeftzbvk.png',
    heading: 'सूर्य - मानेक',
    content:
      'जिनकी कुंडली में सूर्य लग्नेश हो या सूर्य की महादशा चल रही हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे ',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570606/astrologer-ys/msrhaxb6cz89q9lyrubn.png',
    heading: 'मंगल - मूंगा',
    content: 'जिनकी कुंडली में मंगल दोष हो या राशि रत्न मंगल हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे ',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570607/astrologer-ys/pxebknq2kpv4k3rtwors.png',
    heading: 'बुध - पन्ना',
    content:
      'जिनकी कुंडली में राशि गृह बुध हो ,अथवा बुध की महादशा चल रही हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे ',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570617/astrologer-ys/ta5lctrzlvjbahnjhoog.png',
    heading: 'गुरु - पुखराज',
    content:
      'जिनकी कुंडली में राशि गृह गुरु हो ,अथवा गुरु की महादशा चल रही हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे ',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570609/astrologer-ys/uphs0bxlr8t8fzmxpuka.png',
    heading: 'शुक्र - हीरा',
    content:
      'जिनकी कुंडली में राशि गृह शुक्र हो, अथवा शुक्र की महादशा चल रही हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे',
  },
  {
    imgUrl:
      'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1703570614/astrologer-ys/ydukwwj49wxc72aht5qs.png',
    heading: 'शनि - नीलम',
    content:
      'जिनकी कुंडली में राशि गृह शनि हो, अथवा शनि की साढ़े साती चल रही हो उनके लिए ',
    buttonTxt: 'अभी ऑर्डर करे ',
  },
];

export { allProducts };
