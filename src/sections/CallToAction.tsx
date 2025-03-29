"use client";
import star from '@/assets/star.png';
import spring from '@/assets/spring.png'
import Image from 'next/image';
import {motion, useScroll, useTransform} from 'framer-motion'

import ArrowIcon from '@/assets/arrow-right.svg'
import { useRef } from 'react';
export const CallToAction=()=>{

    const callRef= useRef(null);

    const {scrollYProgress}= useScroll({
        target: callRef, 
        offset: ["start end", "end start"],
    });

    const translateY = useTransform(scrollYProgress,[0,1],[150,-150]);
    return <section ref={callRef} className="py-24 bg-[linear-gradient(to_top,#C2D3FF,white)] overflow-x-clip">
        <div className="container">
            <div className='md:max-w-[500px] mx-auto'>
            <h1 className='text-center text-3xl md:text-[50px] bg-gradient-to-b from-black to-blue-700 text-transparent bg-clip-text font-bold tracking-tighter leading-[60px]'>Sign up for free today</h1>

            <p className='mt-6 leading-[30px] text-xl text-center text-blue-900'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
         </div>

            <div className='flex gap-5 justify-center items-center mt-6'>
                <button className="btn btn-primary">Get for free</button>
                <button className='btn btn-text'><span>Learn More</span><ArrowIcon className="w-6 h-6"/></button>
            </div>
            <div className='relative'>
                <motion.img src={star.src} width={300} height={300} alt="star" className='absolute -top-[360px] -left-[210px]  rotate-[0deg] hidden md:block' style={{translateY}}/>
                <motion.img src={spring.src} width={300} height={300} alt="spring" className='absolute -top-[200px] -right-[200px]  rotate-[0deg] hidden md:block' style={{translateY}}/>

            </div>
        </div>
    </section>
}