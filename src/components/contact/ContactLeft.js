import React from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { contact } from '../../assests/images/index'

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8">
      <img className="w-full h-64 object-cover rounded-lg mb-2" src={contact} alt='contactimg' />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Christy Sara Prince</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-end Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          "Empowering user engagement through meticulously crafted interfaces, where every line of code becomes a brushstroke in the canvas of innovation and functionality."
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8590204935</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">christyvinoy2003@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
      </div>
      <div className="flex gap-4">
        <a href='https://wa.me/+918590204935' target='_blank'>
          <span className="bannerIcon">
            <FaWhatsapp />
          </span>
        </a>
        <a href='https://www.instagram.com/am._our__/' target='_blank'>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </a>
        <a href='https://www.linkedin.com/in/christy-sara-prince-a2939a255/' target='_blank'>
          <span className="bannerIcon">
            <FaLinkedin />
          </span>
        </a>
      </div>
    </div>
  )
}

export default ContactLeft