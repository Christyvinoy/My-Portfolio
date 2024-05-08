import React from 'react'
import Resumecard from './Resumecard'
import { motion } from 'framer-motion'

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className='w-full flex gap-20'>
            <div>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>2010-present</p>
                    <h2 className='text-4xl font-bold'>Education Qualification</h2>
                </div>
                <div className=" mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <Resumecard
                        title="BTech in Information Technology"
                        subTitle="Cochin University of Science and Technology (CUSAT) (2022 - present)"
                        result="8.28/10"
                        des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                    <Resumecard
                        title="High School Education"
                        subTitle="Nirmala Public School (2017 - 2022)"
                        result="82.8/100"
                        des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                    <Resumecard
                        title="Primary School Education"
                        subTitle="KENDRIYA VIDYALAYA (2010 - 2016)"
                        result="4/4"
                        des="The training provided to develop children's basic knowledge"
                    />
                </div>
            </div>
            <div><div>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-designColor tracking-[4px]'>Beginner</p>
                    <h2 className='text-4xl font-bold'>Job Experience</h2>
                </div>
                <div className=" mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <Resumecard
                        title="Online 1 on 1 Tution"
                        subTitle="FOCUSFIVE (2024 - present)"
                        result="India"
                        des="One to one tuition involves a teacher, teaching assistant or other adult giving a pupil intensive individual support."
                    />
                </div>
            </div></div>
        </motion.div>
    )
}

export default Education