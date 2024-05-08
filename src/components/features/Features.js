import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section
      id='features'
      className="w-full py-20 px-8 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className='grid grid-cols-3 gap-20'>
        <Card
          title = "Web Development"
          des = "I'm a web developer adept at crafting dynamic and user-friendly digital experiences."
          icon = {<AiFillAppstore/>} 
           />
        <Card
          title = "UI-UX Design"
          des = "I'm a creative architect of digital elegance, sculpting seamless design finesse."
          icon = {<SiAntdesign/>} 
           />
        <Card
          title = "Online Tution"
          des = "I'm an online tutor, dedicated to empowering learners with personalized guidance and support."
          icon = {<FaGlobe/>} e
           />
      </div>
    </section>
  )
}

export default Features