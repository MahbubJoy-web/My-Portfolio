import React from 'react';
import { Link } from 'react-scroll';



const Navber = () => {
  return (
    <div className="absolute top-8 left-0 w-full z-50">
      <div className="container flex justify-center">
        <div className="sm:py-[24px] sm:px-[50px] py-[18px] px-[36px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-[13px] border border-[#1E1F2B]">
          <ul className='flex gap-[24px] sm:gap-[32px] text-[14px] sm:text-[16px] items-center text-[#C1C2D3] font-inter font-medium cursor-pointer'>
            <li><Link to="Banner" smooth={true} duration={500}>About</Link></li>
            <li><Link to="Project" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="Skill" smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navber;
