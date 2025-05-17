import React from 'react'
import { Link } from 'react-router'

const Navber = () => {
  return (
    <>
     <div className="absolute top-8 left-0 w-full z-50">
        <div className="container flex justify-center">
            <div className="py-[24px] px-[50px] bg-gradient-to-r from-[#04071D] to-[#0C0E23] rounded-[13px] border border-[#1E1F2B] ">
              <ul className='flex gap-[32px] items-center text-[#C1C2D3] font-inter font-medium cursor-pointer'>
                <li><Link to={''}></Link>About</li>
                <li><Link to={''}></Link>Projects</li>
                <li><Link to={''}></Link>Testimonials</li>
                <li><Link to={''}></Link>Contact</li>
              </ul>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Navber
