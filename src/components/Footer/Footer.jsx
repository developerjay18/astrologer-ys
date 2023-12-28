import React from 'react';
import { Link } from 'react-router-dom';
import { footerImg, socialLinks } from './data';

function Footer() {
  return (
    <div className="bg-hero text-white font-poppins">
      <div className="container px-5 lg:px-10 mx-auto py-10 flex flex-col">
        {/* upper  */}
        <div className="upper">
          <img src={footerImg} alt="footer-img" className="border-b-[1px]" />
        </div>
        {/* lower  */}
        <div className="lower mt-7 flex gap-8 lg:gap-0 flex-col lg:flex-row items-center">
          <div className="links lg:w-1/3 flex gap-6">
            {socialLinks.map((link, index) => {
              return (
                <Link to={link.url} key={index}>
                  <i className={`fa-brands ${link.iconName} fa-2xl`}></i>
                </Link>
              );
            })}
          </div>
          <div className="nav-links lg:w-1/3">
            <div className="flex justify-center gap-5">
              <Link
                to="/terms-and-conditions"
                className="border-r-2 pr-4 hover:text-red-500 hover:border-r-2 hover:border-white"
              >
                <div>Terms &amp; Conditions</div>
              </Link>
              <Link to={'/privacy-policy'} className="hover:text-red-500">
                <div>Privacy Policy</div>
              </Link>
            </div>
          </div>
          <div className="copyright lg:w-1/3">
            <div className="upper flex gap-1 justify-center lg:justify-end">
              <span>Developed by</span>
              <span>
                <Link
                  to="http://www.jayraiweb.com"
                  className="hover:text-red-500"
                >
                  Jayrai web
                </Link>
              </span>
            </div>
            <div className="lower capitalize text-right">
              copyright @2023 All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
