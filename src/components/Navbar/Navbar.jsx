import React from 'react';
import { logo } from '../../assets';
import { navLinks } from './data';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <header className="absolute top-0">
      <nav>
        {/* upper   */}
        <div className="upper px-20 bg-[#f6f6f6] flex items-center gap-3 justify-center">
          {/* icon  */}
          <div className="icon py-3 font-bold">
            <img src="" alt="" />
            <i className="fa-solid fa-phone fa-xl"></i>
          </div>
          {/* text  */}
          <div className="text font-semibold text-xl flex gap-3 items-center">
            <span className="font-hindi">अभी संपर्क करे</span>
            <span className="font-poppins"> +91 79840 17860</span>
          </div>
        </div>
        {/* lower  */}
        <div className="lower px-20 py-5 bg-transparent flex justify-between items-center">
          {/* left  */}
          <div className="left w-[10%]">
            <img src={logo} alt="" />
          </div>
          {/* right  */}
          <div className="right text-white">
            <ul className="flex font-poppins gap-8 text-xl">
              {navLinks.map((item, index) => (
                <li key={index} className="cursor-pointer capitalize">
                  <Link to={item.slug}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
