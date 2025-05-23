import React, { useEffect, useRef, useState } from 'react'
import Reactlogo from "../assets/Image/React2.png";
import Htmllogo from "../assets/Image/HTML.png";
import Csslogo from "../assets/Image/CSS.png";
import Firebase from "../assets/Image/Firebase.png";
import Tailwindlogo from "../assets/Image/Tailwind2.png";
import Jslogo from "../assets/Image/JavaScript.png";
import SkillComp from './SkillComp';

const skills = [
  { name: "React", logo: Reactlogo, percentage: 100 },
  { name: "Tailwind", logo: Tailwindlogo, percentage: 95 },
  { name: "Firebase", logo: Firebase, percentage: 85 },
  { name: "HTML", logo: Htmllogo, percentage: 80 },
  { name: "CSS", logo: Csslogo, percentage: 80 },
  { name: "JavaScript", logo: Jslogo, percentage: 75 },
];
const Skill = () => {


  return (
    <>
      <div className="py-[110px] pb-[160px] px-4">
        <div className="container">
            <div className="sm:text-[48px] text-[32px] font-inter font-bold pb-[60px] text-center">
              <h2 className='inline'>The Skills That <p className='text-[#CBACF9] inline ml-1'>Power My Code</p></h2>
            </div>
            <div className="mainIcons">
              <div className="flex flex-wrap justify-center gap-14 gap-y-[150px]">
        {skills.map((skill) => (
          <SkillComp
            key={skill.name}
            logo={skill.logo}
            targetPercentage={skill.percentage}
          />
        ))}
      </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Skill
