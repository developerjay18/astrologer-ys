import React from 'react';

function Location() {
  return (
    <div className="px-5 lg:px-20 py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58761.263699652765!2d72.62127194370103!3d23.002504471785326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e873fe25ad37d%3A0xb92fd4e3b951628f!2sYogesh%20Sharma%20-%20Best%20astrologer%20in%20ahmedabad!5e0!3m2!1sen!2sin!4v1703656735373!5m2!1sen!2sin"
        className="border-0 w-full h-[50vh] lg:h-[80vh]"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
