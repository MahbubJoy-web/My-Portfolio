import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import BannerBG from '../assets/Image/Vector.png';
import { Bounce, toast } from 'react-toastify';
import { RiFacebookBoxLine, RiGalleryUploadFill } from 'react-icons/ri';
import button from '../assets/Image/Button.png';
import { PiInstagramLogoBold, PiLinkedinLogoBold } from 'react-icons/pi';
import { RxTwitterLogo } from 'react-icons/rx';
import { FiGithub } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { Link } from 'react-router';
import { BiLogoFacebook } from 'react-icons/bi';

const Contact = () => {
  const [Data, setData] = useState({ Name: '', Email: '', Tittle: '' });
  const [Error, setError] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { Name, Email, Tittle } = Data;

    // Input validation
    if (!Name && !Email && !Tittle) return setError('Please fill up all the inputs');
    if (!Name && !Email) return setError('Please fill up the Name & Email');
    if (!Name && !Tittle) return setError('Please fill up the Name & Tittle');
    if (!Email && !Tittle) return setError('Please fill up the Email & Tittle');
    if (!Name) return setError('Please enter your Name');
    if (!Email) return setError('Please enter your Email');
    if (!Tittle) return setError('Please enter your Title');

    // Clear error
    setError('');

    // Send email
    emailjs.sendForm(
      'service_ghxiosc',
      'template_k6h7qrn',
      form.current,
      {
        publicKey: 'dFGkCULMMsll1qKww',
      }
    ).then(
      () => {
        toast(<div className="flex items-center gap-2">
                <RiGalleryUploadFill className="text-2xl text-green-400" />
                <span className='text-[20px] font-inter font-semibold text-[#f1f1f1]'>Message sent!</span>
            </div>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        setData({ Name: '', Email: '', Tittle: '' });
        form.current.reset();
      },
      (error) => {
        setError('Something went wrong, please try again later.');
      }
    );
  };

  return (
    <div className="pt-[100px] pb-[40px] px-4" style={{ backgroundImage: `url(${BannerBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <div className="flex flex-col items-center justify-center relative">
          <div className="sm:text-[48px] text-[32px] font-inter font-bold pb-[60px] text-center">
            <h2 className='inline'>Let's Build Something <p className="text-[#CBACF9] inline">Next Level</p></h2>
          </div>
          <p className="text-md font-poppins font-medium text-center text-red-300 mt-2">{Error}</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="font-inter font-normal text-[20px] text-[#BEC1DD] flex flex-col gap-5">
              <input
                type="text"
                name="user_name"
                value={Data.Name}
                onChange={(e) => setData((prev) => ({ ...prev, Name: e.target.value }))}
                className="bg-transparent outline-none border border-[#7681c6] p-[3px] pl-3 w-full sm:w-[500px] rounded-[5px] text-[#BEC1DD]"
                placeholder="Enter Your Name"
              />
              <input
                type="text"
                name="user_email"
                value={Data.Email}
                onChange={(e) => setData((prev) => ({ ...prev, Email: e.target.value }))}
                className="bg-transparent outline-none border border-[#7681c6] p-[3px] pl-3 w-full sm:w-[500px] rounded-[5px] text-[#BEC1DD]"
                placeholder="Enter Your Email"
              />
              <input
                type="text"
                name="title"
                value={Data.Tittle}
                onChange={(e) => setData((prev) => ({ ...prev, Tittle: e.target.value }))}
                className="bg-transparent outline-none border border-[#7681c6] p-[3px] pl-3 w-full sm:w-[500px] rounded-[5px] text-[#BEC1DD]"
                placeholder="Enter The Title"
              />
              <textarea
                name="message"
                className="bg-transparent outline-none border border-[#7681c6] p-[3px] pl-3 w-full sm:w-[500px] h-[250px] rounded-[5px] text-[#BEC1DD] overflow-y-scroll"
                placeholder="Message....."
              />
              <div className="w-full flex justify-center mt-5">
                <button
                  type="submit"
                  className="sm:w-[200px] py-[12px] px-[20px] bg-gradient-to-r from-[#161A31] to-[#06091F] rounded-[14px] border-[3px] border-[#20243dda] text-center text-[16px] sm:text-[20px] font-inter font-medium"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
            <div className="w-full flex justify-center items-center mt-[50px]">
              <div className=" flex sm:flex-col sm:absolute bottom-0 right-[0] gap-5">
                <Link to={'https://www.instagram.com/force__coder/'} target='blank' className="w-[40px] h-[40px] rounded-[8px] border-[1px] border-[#20243dda] shadow-[inset_0px_0px_12px_-4px_#c2bebe] flex justify-center items-center"><PiInstagramLogoBold className='text-[23px]'/> </Link>
                <Link to={'https://www.facebook.com/force.coder'} target='blank' className="w-[40px] h-[40px] rounded-[8px] border-[1px] border-[#20243dda] shadow-[inset_0px_0px_12px_-4px_#c2bebe] flex justify-center items-center"><BiLogoFacebook className='text-[23px]'/> </Link>
                <Link to={'https://github.com/MahbubJoy-web'} target='blank' className="w-[40px] h-[40px] rounded-[8px] border-[1px] border-[#20243dda] shadow-[inset_0px_0px_12px_-4px_#c2bebe] flex justify-center items-center"><FiGithub className='text-[23px]'/> </Link>
                <Link to={'https://wa.me/8801963405564'} target='blank' className="w-[40px] h-[40px] rounded-[8px] border-[1px] border-[#20243dda] shadow-[inset_0px_0px_12px_-4px_#c2bebe] flex justify-center items-center"><TbBrandWhatsapp className='text-[23px]'/> </Link>
                <Link to={'https://www.linkedin.com/in/mahbub-hasan-joy-a3ba51344/'} target='blank' className="w-[40px] h-[40px] rounded-[8px] border-[1px] border-[#20243dda] shadow-[inset_0px_0px_12px_-4px_#c2bebe] flex justify-center items-center"><PiLinkedinLogoBold className='text-[23px]'/> </Link>
              </div>
          </div>
           <div className="w-full flex justify-center items-center mt-6 sm:mt-[90px]">
               <h2 className='text-sm font-normal font-inter'>Copyright ©2025 Force-Coder</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

