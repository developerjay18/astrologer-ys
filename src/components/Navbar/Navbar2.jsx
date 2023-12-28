import React from 'react';
import { logo } from '../../assets';
import { navLinks2 } from './data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleState } from '../../store//stateSlice.js';

function Navbar2() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.menuClick);

  return (
    <header className="absolute top-0 bg-black">
      <nav>
        {/* upper   */}
        <div className="upper lg:px-20 bg-[#f6f6f6] flex items-center gap-3 justify-center">
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
        <div className="lower lg:px-20 py-5 bg-transparent flex justify-between items-center">
          {/* left  */}
          <div className="left w-[30%] lg:w-[10%] pl-5 lg:pl-0">
            <Link to={'/'}>
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* right  */}
          <div className="right text-white hidden lg:block">
            <ul className="flex font-poppins gap-8 text-xl">
              {navLinks2.map((item, index) => (
                <li key={index} className="cursor-pointer capitalize">
                  <Link to={item.slug}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* burger menu  */}
          <div
            className="menu mr-5 lg:mr-0 text-white  p-2 rounded-lg block lg:hidden"
            onClick={() => dispatch(toggleState())}
          >
            {state ? (
              <i className="fa-solid fa-xmark fa-2xl border-2 rounded-lg border-black"></i>
            ) : (
              <i className="fa-solid fa-bars fa-2xl rounded-lg"></i>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar2;
