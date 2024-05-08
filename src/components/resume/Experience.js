import React from "react";
import Resumecard from "./Resumecard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=" font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <Resumecard
            title="Online 1 on 1 Tution"
            subTitle="FOCUSFIVE (2024 - present)"
            result="India"
            des="One to one tuition involves a teacher, teaching assistant or other adult giving a pupil intensive individual support."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <Resumecard
            title="University Art Fest Website"
            subTitle="SARGAM'24."
            result="Success"
            des="I was a part in developing Sragam'24 website.The website was fully responsive and dynamic with a feature of LIVE SCORE board"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
