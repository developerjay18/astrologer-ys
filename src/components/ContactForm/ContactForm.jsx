import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { config } from '../../config/config';

function ContactForm() {
  const form = useRef();

  const [data, setData] = useState({
    name: '',
    email: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value }); // 2nd approch also available
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.serviceId,
        config.templateId,
        form.current,
        config.publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );

    setData({
      name: '',
      email: '',
      number: '',
    });
  };

  return (
    <div className="bg-kundali px-5 lg:px-20 py-24 flex contact flex-col lg:flex-row">
      {/* left  */}
      <div className="left lg:w-[50%] flex flex-col gap-7">
        {/* upper  */}
        <div className="upper">
          <h3 className="text-5xl font-bold">हमारे साथ सम्पर्क में रहें!</h3>
        </div>
        {/* middle  */}
        <div className="middle flex flex-col gap-3">
          <p className="text-3xl">
            अपने व्हाट्सएप पर दैनिक अपडेट के लिए सब्सक्राइब करे :
          </p>
          <ul
            style={{ listStyle: 'inside' }}
            className="pl-7 text-2xl font-medium"
          >
            <li>राशिफल</li>
            <li>मुहूर्त और भी बहुत कुछ।</li>
          </ul>
        </div>
        {/* lower  */}
        <div className="lower flex flex-col gap-3">
          <div className="flex text-xl items-center gap-3">
            <span>
              <i className="fa-solid bg-black text-white p-2 rounded-full fa-phone"></i>
            </span>
            <span className="font-poppins">+91 79840 17860</span>
          </div>
          <div className="flex text-xl items-center gap-3">
            <span>
              <i className="fa-solid bg-black text-white p-2 rounded-full fa-envelope"></i>
            </span>
            <span className="font-poppins">yogeshastrolife@gmail.com</span>
          </div>
          <div className="flex text-xl items-center gap-3">
            <span>
              <i className="fa-solid bg-black text-white py-2 px-[0.7rem] rounded-full fa-location-dot"></i>
            </span>
            <span className="">
              16, माधव पार्क पार्ट-3, माधव विद्या विहार स्कूल के पास, वस्त्राल,
              अहमदाबाद, गुजरात 382418
            </span>
          </div>
        </div>
      </div>
      {/* right  */}
      <div className="right lg:w-[50%]">
        <form
          action=""
          className="lg:w-[90%] ml-auto flex flex-col gap-10 pt-10"
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label htmlFor="name" className="font-hindi text-2xl pb-5">
              आपका नाम
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-transparent border-b border-black mt-2 focus:outline-none"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="email" className="font-hindi text-2xl pb-5">
              आपका ईमेल{' '}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border-b border-black mt-2 focus:outline-none"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="number" className="font-hindi text-2xl pb-5">
              आपका व्हाट्सएप नंबर
            </label>
            <input
              type="text"
              name="number"
              id="number"
              className="w-full bg-transparent border-b border-black mt-2 focus:outline-none"
              value={data.number}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-black w-[35%] text-white lg:px-10 text-xl py-2 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
