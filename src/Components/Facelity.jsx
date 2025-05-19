import React from 'react'
import bg from '../assets/Image/FacalityBG.png'
import cardimg1 from '../assets/Image/CardImg.png'
import cardimg2 from '../assets/Image/caedbg.png'
import cardimg3 from '../assets/Image/Card2.png'
import cardimg4 from '../assets/Image/Card3_compo.png'
import cardbg3 from '../assets/Image/Card3bg.png'
import cardbg4 from '../assets/Image/Card5BG.png'
import Card2bg from '../assets/Image/Background (1).png'
import { TbCopy } from 'react-icons/tb'



const Facelity = () => {
  return (
    <>
     <div className=""style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container flex flex-col gap-[40px] items-center">
            <div className="top_Card flex flex-wrap justify-center gap-[30px]">
                <div className="w-[649px] h-[510px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d]">
                    <div className="">
                        <img src={cardimg1} alt="" />
                    </div>
                    <h2 className='w-[390px] leading-9 text-[#fff] text-[32px] font-inter font-bold absolute bottom-6 left-10 '>I prioritize client collaboration, fostering open communication </h2>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="w-[521px] h-[240px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d] ">
                        <h2 className='pt-[40px] pl-[35px] text-[30px] font-inter font-bold text-[#FFF]'>I’m very flexible with time zone communications</h2>
                        <img src={cardimg2} alt="" className='absolute bottom-0'/>
                        <div className="py-[8px] px-[15px] w-fit bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-[11px] border-[1px] border-[#1E1F2B] text-[13px] font-inter font-medium absolute top-[160px] left-6">UK</div>
                        <div className="py-[8px] px-[15px] w-fit bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-[11px] border-[1px] border-[#1E1F2B] text-[13px] font-inter font-medium absolute bottom-[70px] left-[250px] ">USA</div>
                        <div className="py-[8px] px-[15px] w-fit bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-[11px] border-[1px] border-[#1E1F2B] text-[13px] font-inter font-medium absolute bottom-[90px] right-6">ASIA</div>
                        <div className="py-[8px] px-[15px] w-fit bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-[11px] border-[1px] border-[#1E1F2B] text-[13px] font-inter font-medium absolute bottom-4 left-[300px]">AUSTALIA</div>
                    </div>
                    <div className="w-[521px] h-[250px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d] ">
                        <div className="text absolute top-[50%] left-7 translate-y-[-50%] z-10">
                            <p className='text-[14px] font-inter font-normal text-[#C1C2D3]'>I constantly try to improve</p>
                            <h2 className='text-[30px] font-inter font-bold text-[#FFF]'>My tech stack</h2>
                        </div>
                        <div className="absolute right-0 top-0 flex gap-[10px]">
                            <div className="top-[-29px] right-[170px] absolute">
                                <div className="w-[140px] h-[72px] mt-[12px] text-center leading-[72px] bg-[#10132E] rounded-[7px] text-[14px] font-inter font-semibold text-[#fff]"><h2>HTLM</h2></div>
                                <div className="w-[140px] h-[72px] mt-[12px] text-center leading-[72px] bg-[#10132E] rounded-[7px] text-[14px] font-inter font-semibold text-[#fff]"><h2>ReactJS</h2></div>
                                <div className="w-[140px] h-[72px] mt-[12px] text-center leading-[72px] bg-[#10132E] rounded-[7px] text-[14px] font-inter font-semibold text-[#fff]"><h2>JavaScript</h2></div>
                                <div className="w-[140px] h-[72px] mt-[12px] text-center leading-[72px] bg-[#10132E] rounded-[7px] text-[14px] font-inter font-semibold text-[#fff]"><h2>CSS</h2></div>
                            </div>
                            <div className="absolute top-[-70px] right-5 flex flex-col-reverse">
                                <div className="w-[140px] h-[72px] mt-[12px] text-center leading-[72px] bg-[#10132E] rounded-[7px] text-[14px] font-inter font-semibold text-[#fff]"><h2>CSS</h2></div>
                                <div className="w-[140px] h-[72px] mt-[12px] text-center leading-[72px] bg-[#10132E] rounded-[7px] text-[14px] font-inter font-semibold text-[#fff]"><h2>Firebase</h2></div>
                                <div className="w-[140px] h-[72px] mt-[12px] text-center leading-[72px] bg-[#10132E] rounded-[7px] text-[14px] font-inter font-semibold text-[#fff]"><h2>Tailwind CSS</h2></div>
                                <div className="w-[140px] h-[72px] mt-[12px] text-center leading-[72px] bg-[#10132E] rounded-[7px] text-[14px] font-inter font-semibold text-[#fff]"><h2>CSS</h2></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="Buttom_card flex flex-wrap justify-center flex-row-reverse gap-[30px]">
                <div className="w-[811px] h-[390px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d] bg-[#000319]">
                    <div className="relative">
                        <img src={Card2bg} alt=""/>
                    </div>
                    <div className="absolute top-0 right-0">
                        <img src={cardimg3} alt=""/>
                    </div>
                    <div className="text absolute top-[50%] left-7 translate-y-[-50%] z-10">
                            <p className='text-[16px] font-inter font-normal text-[#C1C2D3] tracking-[3px]'>The Inside Scoop</p>
                            <h2 className='w-[311px] text-[30px] font-inter font-bold text-[#FFF]'>Currently Building </h2>
                            <div className="w-[351px] flex ">
                            <h2 className='w-[311px] text-[30px] font-inter font-bold text-[#FFF]'> Of Web In</h2>
                            <p className='w-full ml-[-30px] text-[30px] font-inter font-bold text-[#CBACF9]'>JS Library</p>
                            </div>
                        </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="w-[351px] h-[180px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d] " style={{ backgroundImage: `url(${cardbg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className='pl-5 pt-3 text-[24px] font-inter font-bold text-[#FFF]'>Tech enthusiast with a passion for development.</h2>
                        <div className="absolute bottom-0 right-0">
                             <img src={cardimg4} alt="" />
                        </div>
                    </div>
                    <div className="w-[351px] h-[180px] rounded-[23px] flex items-center justify-center overflow-hidden border-[1px] border-[#3637499d]" style={{ backgroundImage: `url(${cardbg4})`, backgroundSize: 'cover' }}>
                        <div className="Card5Text flex items-center flex-col gap-[12px]">
                            <h2 className='w-[261px] text-center text-[24px] font-inter font-bold text-[#FFF]'>Let's Build Your Dream Website</h2>
                            <button className='px-[16px] py-[12px] rounded-md flex items-center gap-1 bg-gradient-to-r from-[#161A31] to-[#06091F text-[14px] font-inter font-medium text-[#C1C2D3]'><TbCopy className=''/> <p>Copy my email address</p></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Facelity 
