// import { useEffect, useState, useRef } from "react";
// import reactlo from '../assets/Image/React.png';

// const SkillComp = ({ logo, targetPercentage }) => {
//   const [percentage, setPercentage] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.6 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;
//     const interval = setInterval(() => {
//       setPercentage((prev) => {
//         if (prev >= targetPercentage) {
//           clearInterval(interval);
//           return targetPercentage;
//         }
//         return prev + 1;
//       });
//     }, 20);
//     return () => clearInterval(interval);
//   }, [isVisible, targetPercentage]);

//   const radius = 70;
//   const stroke = 8;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//           <div
//                           ref={ref}
//                           className="flex items-center justify-center animate-fade-in"
//                         >
//                           <div className="relative sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#161A31] to-[#06091F] animate-pulse">
//                             <svg className="w-full h-full transform -rotate-90">
//                               <circle
//                                 cx="75"
//                                 cy="75"
//                                 r="70"
//                                 stroke="transparent"
//                                 strokeWidth={stroke}
//                                 fill="transparent"
//                               />
//                               <circle
//                                 cx="75"
//                                 cy="75"
//                                 r="70"
//                                 stroke="#F3C623"
//                                 strokeWidth={stroke}
//                                 fill="transparent"
//                                 strokeDasharray={circumference}
//                                 strokeDashoffset={strokeDashoffset}
//                                 strokeLinecap="round"
//                                 className="text-yellow-400 transition-all duration-200 ease-out"
//                               />
//                             </svg>
//                             <div className="flex items-center justify-center text-white text-[20px] sm:text-[32px] font-semibold font-inter mt-8">
//                               {percentage}%
//                             </div>
//                             <div className="absolute inset-0 flex items-center justify-center">
//                               <img src={logo} alt="React Logo" className="sm:w-[60px] sm:h-[60px] w-[45px] " />
//                             </div>
//                           </div>
//                       </div>
    
//   );
// }

// export default SkillComp
import { useEffect, useState, useRef } from "react";

const SkillComp = ({ logo, targetPercentage }) => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= targetPercentage) {
          clearInterval(interval);
          return targetPercentage;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [isVisible, targetPercentage]);

  const radius = 70;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex items-center justify-center">
      <div className="relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
        <svg
          viewBox="0 0 150 150"
          className="w-full h-full transform -rotate-90"
        >
          <circle
            cx="75"
            cy="75"
            r={normalizedRadius}
            stroke="transparent"
            strokeWidth={stroke}
            fill="transparent"
          />
          <circle
            cx="75"
            cy="75"
            r={normalizedRadius}
            stroke="#F3C623"
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-200 ease-out"
          />
        </svg>

        {/* Centered Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Skill Logo"
            className="w-[35px] h-[35px] sm:w-[60px] sm:h-[60px]"
          />
        </div>

        {/* Centered Percentage */}
        <div className="flex items-end justify-center pb-1 sm:pb-4 mt-4">
          <span className="text-white text-[14px] sm:text-[20px] font-semibold font-inter">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillComp;

