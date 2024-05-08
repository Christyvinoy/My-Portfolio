import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaInstagram, FaLinkedin, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';

const Leftbanner = () => {
    const [text] = useTypewriter({
        words: ["Front-end Developer.", "Professional Coder.", "UI Designer.", "Quick Learner."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className='w-1/2 flex flex-col gap-14'>
            <div className='flex flex-col gap-4'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>
                    Hi, I'm <br />
                    <span className="text-designColor capitalize text-5xl">Christy Sara Prince</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a{" "}
                    <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#BA0021"
                    /></h2>

                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    "Passionate front-end developer with a proven track record of delivering
                    visually stunning and user-friendly projects.I thrive on crafting engaging digital experiences
                    that captivate users."
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="flex gap-4">
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
                        <a href='https://github.com/Christyvinoy' target='_blank'>
                            <span className="bannerIcon">
                                <FaGithub />
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbanner