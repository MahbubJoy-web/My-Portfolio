import React from 'react'
import BannerBG from '../assets/Image/BannerBG.png'
import mypic from '../assets/Image/ME.png'
import mypic2 from '../assets/Image/me2.jpg'
import mypic3 from '../assets/Image/Mypic.png'
import { Link } from 'react-router'
import { GoArrowUpRight } from 'react-icons/go'
import { IoMdArrowRoundDown } from 'react-icons/io'
import CV from '../assets/CV/cv.pdf'

const Banner = () => {
  return (
    <>
       <div className="w-full pt-[170px] sm:pt-[230px] sm:pb-[165px] pb-[100px] text-white px-6 lg:px-0" style={{ backgroundImage: `url(${BannerBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className=".comtainer flex justify-center">
            <div className=" flex flex-wrap items-center xl:justify-between justify-center">
             <div className="Banner_Text text-center md:w-[700px]">
                 <p className='text-[16px] font-inter font-normal text-[#E4ECFF] tracking-[5px] mb-[20px]'>DYNAMIC WEB MAGIC WITH FORCE CODER</p>
                 <div className="sm:w-[700px] text-[48px] lg:text-[62px] xl:text-[72px] font-inter font-bold ">
                    <h2 className='text-[#fffffffb]'>Front-End <p className='text-[#cbacf9d5] inline-block'>React JS</p><h2 className='text-[#cf7238e7] mt-[-24px]'>Developer</h2></h2>
                </div>
                 <h3 className='text-[18px] lg:text-[24px] font-inter font-normal tracking-[3px] text-pretty'>Hi! I’m Joy, A React.JS Developer based in Bangladesh</h3>
                 <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center xl:justify-start items-center">
                    <Link to={"https://github.com/MahbubJoy-web"} target='blank' className='w-[230px]  py-[22px] px-[40px] bg-gradient-to-r from-[#161A31] to-[#06091F] rounded-[14px] border-[3px] border-[#20243dda] font-inter font-medium flex items-center'>
                        <p className='sm:text-[18px] font-inter font-medium'>See my work</p>
                        <span className='ml-2 text-[20px]'>
                            <GoArrowUpRight/>
                        </span>
                    </Link>
                    <Link to={CV} download={CV.pdf} target='blank' className='w-[240px]  py-[22px] px-[57px] sm:px-[44px] text-center bg-gradient-to-r from-[#161A31] to-[#06091F] rounded-[14px] border-[3px] border-[#20243dda] text-sm font-inter font-medium flex items-center'>
                        <p className='sm:text-[18px] font-inter font-medium'>Download CV</p>
                        <span className='ml-2 text-[20px]'>
                            <IoMdArrowRoundDown />
                        </span>
                    </Link>
                 </div>
             </div>
            <div className="banner img  mt-[100px] xl:mt-0">
                <img src={mypic} alt="" />
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
