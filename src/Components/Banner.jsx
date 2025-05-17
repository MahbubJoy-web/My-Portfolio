import React from 'react'
import BannerBG from '../assets/Image/BannerBG.png'
import mypic from '../assets/Image/ME.png'
import mypic2 from '../assets/Image/me2.jpg'
import mypic3 from '../assets/Image/Mypic.png'
import { Link } from 'react-router'
import { GoArrowUpRight } from 'react-icons/go'
import { IoMdArrowRoundDown } from 'react-icons/io'

const Banner = () => {
  return (
    <>
       <div className="w-full pt-[230px] pb-[165px] text-white" style={{ backgroundImage: `url(${BannerBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className=".comtainer flex justify-center">
            <div className=" flex items-center justify-between">
             <div className="Banner_Text">
                 <p className='text-[16px] font-inter font-normal text-[#E4ECFF] tracking-[5px] mb-[20px]'>DYNAMIC WEB MAGIC WITH FORCE CODER</p>
                 <div className="text-[72px] font-inter font-bold ">
                <div className="flex gap-3">
                    <h2 className='text-[#fffffffb]'>Front-End</h2>
                    <h3 className='text-[#cbacf9d5]'>React JS</h3>
                </div>
                <h2 className='text-[#cf7238e7] mt-[-24px]'>Developer</h2>
                </div>
                 <h3 className='text-[24px] font-inter font-normal tracking-[3px]'>Hi! I’m Joy, A React.js Developer based in Bangladesh</h3>
                 <div className="mt-14 flex gap-5">
                    <Link to={""} className='w-[230px] py-[22px] px-[40px] bg-gradient-to-r from-[#161A31] to-[#06091F] rounded-[14px] border-[3px] border-[#20243dda] text-sm font-inter font-medium flex items-center'>
                        <p className='text-[18px] font-inter font-medium'>See my work</p>
                        <span className='ml-2 text-[20px]'>
                            <GoArrowUpRight/>
                        </span>
                    </Link>
                    <button className='w-[240px] py-[22px] px-[40px] bg-gradient-to-r from-[#161A31] to-[#06091F] rounded-[14px] border-[3px] border-[#20243dda] text-sm font-inter font-medium flex items-center'>
                        <p className='text-[18px] font-inter font-medium'>Download CV</p>
                        <span className='ml-2 text-[20px]'>
                            <IoMdArrowRoundDown />
                        </span>
                    </button>
                 </div>
             </div>
            <div className="banner img w-2/5">
                <img src={mypic} alt="" />
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
