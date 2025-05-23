import React from 'react'
import card1 from '../assets/Image/_Group_.png'
import card2 from '../assets/Image/_Group_ (1).png'
import card3 from '../assets/Image/_Group_ (2).png'
import card4 from '../assets/Image/_Group_(3).png'
import card5 from '../assets/Image/_GroupTT_.png'

const Experience = () => {
  return (
    <>
      <div className="px-4">
        <div className="container">
            <div className="">
            <div className="flex justify-center gap-3 sm:text-[48px] text-[32px] font-inter font-bold pb-[60px] text-center">
              <h2>My<p className='text-[#CBACF9] inline-block ml-3 '>work experince</p></h2>
            </div>
            <div className="Card flex flex-wrap items-center justify-center gap-[40px]">
                <div className="singleCard1 sm:flex items-center justify-center gap-[30px] sm:px-[52px] sm:py-[5px] py-[35px] px-[20px] w-[600px] sm:h-[190px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[1px] border-[#20243D] rounded-[14px] border-t-[6px] ">
                    <div className="sm:w-[150px] w-[66px]">
                        <img src={card1} alt="" className='w-full'/>
                    </div>
                    <div className="mt-5 sm:mt-0">
                        <h2 className='sm:text-[26px] text-[20px] font-inter font-bold'>Frontend Engineer</h2>
                        <p className='sm:text-[18px] font-medium font-inter text-[#BEC1DD]'>Specialized in building interactive and scalable front-end applications with HTML,React JS etc.</p>
                    </div>
                </div>
                <div className="singleCard2 sm:flex items-center justify-center gap-[30px] py-[35px] px-[20px] sm:px-[52px] sm:py-[5px] w-[600px] sm:h-[190px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[1px] border-[#20243D] rounded-[14px] border-t-[6px] ">
                    <div className="sm:w-[180px] w-[66px]">
                        <img src={card2} alt="" className='w-full'/>
                    </div>
                    <div className="mt-5 sm:mt-0">
                        <h2 className='sm:text-[26px] text-[20px] font-inter font-bold'>Web Design & Responsive </h2>
                        <p className='sm:text-[18px] font-medium font-inter text-[#BEC1DD] mt-[12px] '>Transforming Figma designs into responsive, pixel-perfect websites using Tailwind CSS for sleek and efficient UI development.</p>
                    </div>
                </div>
                <div className="singleCard3 sm:flex items-center justify-center gap-[30px] py-[35px] px-[20px] sm:px-[52px] sm:py-[5px] w-[600px] sm:h-[190px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[1px] border-[#20243D] rounded-[14px] border-t-[6px] ">
                    <div className="sm:w-[210px] w-[66px]">
                        <img src={card4} alt="" className='w-full'/>
                    </div>
                    <div className="mt-5 sm:mt-0">
                        <h2 className='sm:text-[26px] text-[20px] font-inter font-bold '>Backend with Firebase </h2>
                        <p className='sm:text-[18px] font-medium font-inter text-[#BEC1DD] mt-[12px] '>Built interactive web apps using Firebase, utilizing its real-time database and auth system to backend performance</p>
                    </div>
                </div>
                <div className="singleCard4 sm:flex items-center justify-center gap-[30px] py-[35px] px-[20px] sm:px-[52px] sm:py-[5px] w-[600px] sm:h-[190px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[1px] border-[#20243D] rounded-[14px] border-t-[6px] ">
                    <div className="sm:sm:w-[200px] w-[66px]">
                        <img src={card3} alt="" className='w-[123px]'/>
                    </div>
                    <div className="mt-5 sm:mt-0">
                        <h2 className='sm:text-[26px] text-[20px] font-inter font-bold'>Web Development - React JS</h2>
                        <p className='sm:text-[18px] font-medium font-inter text-[#BEC1DD] mt-[12px] '>Developing dynamic, component-based web apps using React.js and modern front-end tools.</p>
                    </div>
                </div>
                <div className="singleCard4 sm:flex items-center justify-center gap-[30px] py-[35px] px-[20px] sm:px-[52px] sn:py-[5px] w-[600px] sm:h-[190px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] border-[1px] border-[#20243D] rounded-[14px] border-t-[6px] ">
                    <div className="sm:w-[250px] w-[70px]">
                        <img src={card5} alt="" className='w-[250px]'/>
                    </div>
                    <div className="mt-5 sm:mt-0">
                        <h2 className='sm:text-[26px] text-[20px] font-inter font-bold'>Project with Team</h2>
                        <p className='sm:text-[18px] font-medium font-inter text-[#BEC1DD] mt-[12px] '>Developed and maintained user-facing features using modern frontend technologies with Front-End Engineer Team.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Experience
