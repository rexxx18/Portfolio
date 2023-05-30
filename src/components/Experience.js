import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";



const Details = ({
  name,
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
    const ref=useRef(null);
   
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref} />
      <motion.div 
      initial={{y:50}} 
      whileInView={{y:0}}
      transition={{duration:0.5,type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;<a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark">@{company}</a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div style={{scaleY:scrollYProgress}} className="h-full w-[4px] left-9 top-0 origin-top bg-dark dark:bg-light absolute"/>
        <ul className="w-full flex flex-col items-center justify-between ml-4">

        <Details
            position="Associate UI Developer"
            companyLink={"www.google.com"}
            company={"Ascendeum"}
            time={"2022-2023"}
            address={"Gurgaon , Haryana"}
            work="Worked on a team responsible for developing new features for Mela's search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Developer"
            companyLink={"www.google.com"}
            company={"Mela"}
            time={"2021-2022"}
            address={"Bangalore , Indiranagar"}
            work="Worked on a team responsible for developing new features for Mela's search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
         
        </ul>
      </div>
    </div>
  );
};

export default Experience;
