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
     {/* <div className="w-full" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container flex flex-col gap-[40px] items-center">
            <div className="top_Card flex flex-wrap justify-center gap-[30px]">
                <div className="w-full max-w-[649px] h-[510px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d]">
                    <div className="">
                        <img src={cardimg1} alt="" />
                    </div>
                    <h2 className='max-w-[390px] leading-9 text-[#fff] text-[32px] font-inter font-bold absolute bottom-6 left-10 '>I prioritize client collaboration, fostering open communication </h2>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="xl:w-[521px] w-[649px] h-[240px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d] ">
                        <h2 className='pt-[40px] pl-[35px] text-[30px] font-inter font-bold text-[#FFF]'>I’m very flexible with time zone communications</h2>
                        <img src={cardimg2} alt="" className='absolute bottom-0'/>
                        <div className="py-[8px] px-[15px] w-fit bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-[11px] border-[1px] border-[#1E1F2B] text-[13px] font-inter font-medium absolute top-[160px] left-6">UK</div>
                        <div className="py-[8px] px-[15px] w-fit bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-[11px] border-[1px] border-[#1E1F2B] text-[13px] font-inter font-medium absolute bottom-[70px] left-[250px] ">USA</div>
                        <div className="py-[8px] px-[15px] w-fit bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-[11px] border-[1px] border-[#1E1F2B] text-[13px] font-inter font-medium absolute bottom-[90px] right-6">ASIA</div>
                        <div className="py-[8px] px-[15px] w-fit bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-[11px] border-[1px] border-[#1E1F2B] text-[13px] font-inter font-medium absolute bottom-4 left-[300px]">AUSTALIA</div>
                    </div>
                    <div className="xl:w-[521px] h-[250px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d] ">
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
                <div className="xl:w-[811px] h-[390px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d] bg-[#000319]">
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
                    <div className="xl:w-[351px] w-[649px] h-[180px] relative rounded-[23px] overflow-hidden border-[1px] border-[#3637499d] " style={{ backgroundImage: `url(${cardbg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h2 className='pl-5 pt-3 text-[24px] font-inter font-bold text-[#FFF]'>Tech enthusiast with a passion for development.</h2>
                        <div className="absolute bottom-0 right-0">
                             <img src={cardimg4} alt="" />
                        </div>
                    </div>
                    <div className="xl:w-[351px] h-[180px] rounded-[23px] flex items-center justify-center overflow-hidden border-[1px] border-[#3637499d]" style={{ backgroundImage: `url(${cardbg4})`, backgroundSize: 'cover' }}>
                        <div className="Card5Text flex items-center flex-col gap-[12px]">
                            <h2 className='w-[261px] text-center text-[24px] font-inter font-bold text-[#FFF]'>Let's Build Your Dream Website</h2>
                            <button className='px-[16px] py-[12px] rounded-md flex items-center gap-1 bg-gradient-to-r from-[#161A31] to-[#06091F text-[14px] font-inter font-medium text-[#C1C2D3]'><TbCopy className=''/> <p>Copy my email address</p></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     </div> */}
     <div className="w-full" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="container mx-auto flex flex-col gap-10 items-center px-4 sm:px-6">
    
    {/* Top Cards */}
    <div className="top_Card flex flex-col xl:flex-row flex-wrap justify-center gap-6 w-full">
      <div className="w-full xl:max-w-[649px] h-[510px] relative rounded-[23px] overflow-hidden border border-[#3637499d]">
        <img src={cardimg1} alt="" className="w-full h-full object-cover"/>
        <h2 className="max-w-[390px] text-white text-3xl font-inter font-bold absolute bottom-6 left-5 md:left-10 leading-9">
          I prioritize client collaboration, fostering open communication
        </h2>
      </div>

      {/* Right Side Cards */}
      <div className="flex flex-col gap-5 w-full xl:w-auto">
        {/* Timezone Card */}
        <div className="w-full xl:w-[521px] h-[240px] relative rounded-[23px] overflow-hidden border border-[#3637499d] p-5">
          <h2 className="text-2xl xl:text-3xl font-bold text-white">I’m very flexible with time zone communications</h2>
          <img src={cardimg2} alt="" className="absolute bottom-0 right-0 w-full"/>
          
          {/* Locations */}
          <div className="absolute top-[160px] left-4 text-xs sm:text-sm bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-lg border border-[#1E1F2B] px-3 py-1">UK</div>
          <div className="absolute bottom-[70px] left-[150px] sm:left-[250px] text-xs sm:text-sm bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-lg border border-[#1E1F2B] px-3 py-1">USA</div>
          <div className="absolute bottom-[90px] right-4 text-xs sm:text-sm bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-lg border border-[#1E1F2B] px-3 py-1">ASIA</div>
          <div className="absolute bottom-4 left-[180px] sm:left-[300px] text-xs sm:text-sm bg-gradient-to-r from-[#161A31] to-[#06091F] text-white rounded-lg border border-[#1E1F2B] px-3 py-1">AUSTRALIA</div>
        </div>

        {/* Tech Stack Card */}
        <div className="w-full xl:w-[521px] h-[250px] relative rounded-[23px] overflow-hidden border border-[#3637499d] p-5">
          <div className="absolute z-10 top-1/2 left-6 -translate-y-1/2">
            <p className="text-sm text-[#C1C2D3]">I constantly try to improve</p>
            <h2 className="text-2xl xl:text-3xl font-bold text-white">My tech stack</h2>
          </div>
          {/* Tech Boxes */}
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

    {/* Bottom Cards */}
    <div className="Buttom_card flex flex-col xl:flex-row-reverse flex-wrap justify-center gap-6 w-full">
      
      {/* Currently Building Card */}
      <div className="w-full xl:w-[811px] h-[390px] relative rounded-[23px] overflow-hidden border border-[#3637499d] bg-[#000319]">
        <img src={Card2bg} alt="" className="w-full "/>
        <div className="absolute top-0 md:right-0 right-[-300px]">
          <img src={cardimg3} alt="" className='w-full'/>
        </div>
        <div className="absolute top-1/2 left-6 -translate-y-1/2 z-10">
          <p className="text-[16px] text-[#C1C2D3] tracking-widest">The Inside Scoop</p>
          <h2 className="text-[32px] font-bold text-white">Currently Building</h2>
          <div className="flex flex-wrap gap-2">
            <h2 className="text-2xl font-bold text-white">Of Web In</h2>
            <p className="text-2xl font-bold text-[#CBACF9]">JS Library</p>
          </div>
        </div>
      </div>

      {/* Right Two Small Cards */}
      <div className="flex flex-col gap-5 w-full xl:w-auto">
        
        {/* Passion Card */}
        <div className="w-full xl:w-[351px] h-[180px] relative rounded-[23px] overflow-hidden border border-[#3637499d]" style={{ backgroundImage: `url(${cardbg3})`, backgroundSize: 'cover' }}>
          <h2 className="text-white text-2xl font-bold p-4">Tech enthusiast with a passion for development.</h2>
          <div className="absolute bottom-0 right-0">
            <img src={cardimg4} alt=""/>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="w-full xl:w-[351px] h-[180px] rounded-[23px] flex items-center justify-center overflow-hidden border border-[#3637499d]" style={{ backgroundImage: `url(${cardbg4})`, backgroundSize: 'cover' }}>
          <div className="Card5Text flex flex-col items-center gap-3 p-4">
            <h2 className="text-center text-white text-2xl font-bold">Let's Build Your Dream Website</h2>
            <button className="px-4 py-2 rounded-md flex items-center gap-2 bg-gradient-to-r from-[#161A31] to-[#06091F] text-sm font-medium text-[#C1C2D3]">
              <TbCopy /> <p>Copy my email address</p>
            </button>
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
