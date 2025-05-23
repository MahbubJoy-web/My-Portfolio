import React from 'react'
import CardImg from '../assets/Image/ProjectCard.png'
import CardImg2 from '../assets/Image/ProjectCard2.png'
import HTML from '../assets/Image/HTML.png'
import Firebase from '../assets/Image/Firebase.png'
import Reacticon from '../assets/Image/React.png'
import Tailwind from '../assets/Image/TailwindCSS.png'
import JS from '../assets/Image/JavaScript.png'
import CSS from '../assets/Image/CSS.png'
import Boost from '../assets/Image/bootstrap-logo-shadow.png'
import GmPro from '../assets/Image/GMproject.png'
import CAppa from '../assets/Image/Chatting1.png'
import { Link } from 'react-router'
import { GoArrowUpRight } from 'react-icons/go'


const Project = () => {
  return (
    <>
      <div id='Project' className="pt-[105px] px-4">
        <div className="container flex justify-center ">
            <div className="flex flex-col items-center">
                <div className="sm:text-[48px] text-[32px] font-inter font-bold pb-[48px] text-center">
                    <h2 className='inline'>A small selection of<p className='text-[#CBACF9] inline-block ml-4'>Big projects</p> </h2>
                </div>
                <div className="flex flex-wrap gap-[30px] justify-center">
                    <div className="SingleCard">
                        <div className="card w-full xl:w-[600px] px-[24px] py-[36px] border-[1px] border-[#3637499d] rounded-[20px]">
                            <div className="w-full xl:w-[552px] rounded-[14px]">
                                <img src={CardImg2} alt="" className='w-full'/>
                            </div>
                            <div className="xl:w-[552px] mt-[36px] text font-inter">
                                <h2 className='sm:text-[32px] text-2xl font-bold text-[#fff]'>NoteApp - for Smart Productivity </h2>
                                <p className='sm:text-[20px] text-[16px] mt-[18px] font-normal text-[#BEC1DD]'>A Full stack web, Helps you stay organized in your daily life or study notes. Built using React, Tailwind CSS & Firebase</p>
                            </div>
                            <div className="mt-[26px] w-full flex justify-between items-center">
                                <div className="icons flex relative">
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D]">
                                       <img src={Reacticon} alt="" className='sm:w-[27px] w-[20px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-8 sm:left-11">
                                        <img src={Tailwind} alt="" className='sm:w-[27px] w-[20px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-16 sm:left-[88px]">
                                        <img src={Firebase} alt="" className='sm:w-[22px] w-[16px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-24 sm:left-[133px]">
                                        <img src={JS} alt="" className='sm:w-[22px] w-[16px]'/>
                                    </div>
                                </div>
                                <div className="Link">
                                    <Link to={'https://note-app-force-coder.vercel.app/'} target='blank' className='sm:w-[175px] flex items-center gap-[3px] justify-center text-[#CBACF9]'>
                                    <p className='text-[16px] sm:text-[20px] font-inter font-medium '>Check Live Site</p>
                                    <span className='text-[25px]'>
                                        <GoArrowUpRight />
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="SingleCard">
                        <div className="card w-full xl:w-[600px] px-[24px] py-[36px] border-[1px] border-[#3637499d] rounded-[20px]">
                            <div className="w-full xl:w-[552px] rounded-[14px]">
                                <img src={CAppa} alt="" className='w-full' />
                            </div>
                            <div className="w-fulll xl:w-[552px] mt-[36px] text font-inter">
                                <h2 className='sm:text-[32px] text-2xl font-bold text-[#fff]'>Real-Time smooth Messaging  </h2>
                                <p className='sm:text-[20px] text-[16px] mt-[18px] font-normal text-[#BEC1DD]'>Perfect for real-time chatting with friends, small teams, or client communication — anytime, anywhere. Full Stack</p>
                            </div>
                            <div className="mt-[26px] w-full flex justify-between items-center">
                                <div className="icons flex relative">
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D]">
                                        <img src={Reacticon} alt="" className='sm:w-[27px] w-[20px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-8 sm:left-11">
                                        <img src={Tailwind} alt="" className='sm:w-[27px] w-[20px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-16 sm:left-[88px]">
                                        <img src={Firebase} alt="" className='sm:w-[22px] w-[16px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-24 sm:left-[133px]">
                                        <img src={JS} alt="" className='sm:w-[22px] w-[16px]'/>
                                    </div>
                                </div>
                                <div className="Link">
                                    <Link to={'https://fc-chatting-web.vercel.app/'} target='blank' className='sm:w-[175px] flex items-center gap-[3px]  text-[#CBACF9]'>
                                    <p className='sm:text-[20px] text-[14px] font-inter font-medium '>Check Live Site</p>
                                    <span className='text-[25px]'>
                                        <GoArrowUpRight />
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SingleCard">
                        <div className="card w-full xl:w-[600px] px-[24px] py-[36px] border-[1px] border-[#3637499d] rounded-[20px]">
                            <div className="w-full xl:w-[552px] rounded-[14px]">
                                <img src={CardImg} alt="" className='w-full '/>
                            </div>
                            <div className="w-full xl:w-[552px] mt-[36px] text font-inter">
                                <h2 className='sm:text-[32px] text-2xl font-bold text-[#fff]'>3D Animated Solar System </h2>
                                <p className='sm:text-[20px] text-[16px] mt-[18px] font-normal text-[#BEC1DD]'>Explore the wonders of our solar system with this captivating 3D Animation of the planets using HTML , CSS </p>
                            </div>
                            <div className="mt-[26px] w-full flex justify-between items-center">
                                <div className="icons flex relative">
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D]">
                                        <img src={HTML} alt="" className='sm:w-[27px] w-[20px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-8 sm:left-10">
                                        <img src={CSS} alt="" className='sm:w-[35px] w-[26px]'/>
                                    </div>
                                </div>
                                <div className="Link">
                                    <Link to={'https://mahbubjoy-web.github.io/solar-system/'} target='blank' className='sm:w-[175px] flex items-center gap-[3px] justify-center text-[#CBACF9]'>
                                    <p className='sm:text-[20px] text-[16px] font-inter font-medium '>Check Live Site</p>
                                    <span className='text-[25px]'>
                                        <GoArrowUpRight />
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SingleCard">
                        <div className="card w-full xl:w-[600px] px-[24px] py-[36px] border-[1px] border-[#3637499d] rounded-[20px]">
                            <div className="w-full xl:w-[552px] rounded-[14px]">
                                <img src={GmPro} alt="" className='w-full' />
                            </div>
                            <div className="w-full xl:w-[552px] mt-[36px] text font-inter">
                                <h2 className='sm:text-[32px] text-2xl font-bold text-[#fff]'>Daily Web Tools – Guess & Organize </h2>
                                <p className='sm:text-[20px] text-[16px] mt-[18px] font-normal text-[#BEC1DD]'> Functional mini-project featuring a Number Guessing Game and a To-do list Built using HTML, CSS & JS, Boos.</p>
                            </div>
                            <div className="mt-[26px] w-full flex justify-between items-center">
                                <div className="icons flex relative">
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D]">
                                        <img src={HTML} alt="" className='sm:w-[27px] w-[20px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-8 sm:left-11">
                                        <img src={JS} alt="" className='sm:w-[22px] w-[16px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-16 sm:left-[88px]">
                                        <img src={CSS} alt="" className='sm:w-[35px] w-[26px]'/>
                                    </div>
                                    <div className="singleIcon border-[1px] border-[#3637499d] rounded-[50%] w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] flex justify-center items-center bg-gradient-to-r from-[#04071D] to-[#04071D] absolute left-24 sm:left-[133px]">
                                        <img src={Boost} alt="" className='sm:w-[35px] w-[26px]'/>
                                    </div>
                                </div>
                                <div className="Link">
                                    <Link to={'https://mahbubjoy-web.github.io/Contest-project/'} target='blank' className='smw-[175px] flex items-center gap-[3px] justify-center text-[#CBACF9]'>
                                    <p className='sm:text-[20px] text-[16px] font-inter font-medium '>Check Live Site</p>
                                    <span className='text-[25px]'>
                                        <GoArrowUpRight />
                                    </span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Project
