"use client"
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  function toggleNavbar() {
    setNavbar(!navbar);
  }

  return (
    <div className='bg-secondary py-8 text-white'>
      <div className='grid grid-cols-12 container mx-auto'>
        <div className='md:col-span-2 col-span-6'>
          <div className='border-b-2 inline border-primary text-xl pb-1 font-bold'>🧑🏻 Lalit Gupta</div>
        </div>
        <div className='md:col-span-8 col-span-6 hidden md:flex hidden'>
          <ul className='flex gap-12 items-center h-[100%] justify-center'>
            <li className='menu-link'>About</li>
            <li className='menu-link'>Workflow</li>
            <li className='menu-link'>Services</li>
            <li className='menu-link'>Pricing</li>
          </ul>
        </div>
        <div className='md:hidden col-span-6 flex justify-end items-center'>
          {navbar ? 
            <ImCross className='text-xl cursor-pointer' onClick={toggleNavbar} /> :
            <CiMenuFries className='text-xl cursor-pointer' onClick={toggleNavbar} />
          }
        </div>
        <div className='md:col-span-2 col-span-6 flex justify-end'>
          <button className='bg-primary rounded-full px-8 py-2 border-2 border-transparent hover:border-2 hover:border-primary hover:bg-secondary'>
            Let&apos;s Talk
          </button>
        </div>
      </div>

      {navbar && (
        <div className='md:hidden mob-menu'>
          <ul className='flex flex-col items-center gap-4 mt-4'>
            <li className='menu-link'>About</li>
            <li className='menu-link'>Workflow</li>
            <li className='menu-link'>Services</li>
            <li className='menu-link'>Pricing</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
