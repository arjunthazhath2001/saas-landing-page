"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinder from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from "react";



export const Hero = () => {
  const heroRef = useRef(null)
  const {scrollYProgress}= useScroll({ //only gives a value between 0 and 1
    target: heroRef,
    offset: ["start end","end start"]
  })

  const translateY= useTransform(scrollYProgress,[0,1],[150,-150]);

  return (
    <section ref={heroRef} className="pb-20 pt-8 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_90%)] overflow-x-clip">
      <div className="container">
        
        
        <div className="md:flex items-center">
        {/* text content part */}
        <div className="md:w-[478px]">
          <div className="tag">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to Productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          <div className="flex mt-[30px] gap-1">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn More</span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* image part */}
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img src={cogImage.src} alt="cog Image" className="md:absolute md:h-full md:w-auto md:max-w-none"
            animate={{ translateY: [30,-30],}} transition={{repeat:Infinity,ease:'easeInOut',duration:2,repeatType:'mirror'}}/>

            <motion.img src={cylinder.src} alt="cylinder" height={220} width={220} className="hidden md:block -top-8 -left-32 absolute" style={{translateY:translateY}}/>

            <motion.img src={noodleImage.src} alt="noodle" width={220} className="hidden lg:block absolute top-[500px] left-[448px] rotate-[30deg]" style={{translateY:translateY, rotate:30}}/>
        </div>

    </div>


      </div>
    </section>
  );
};
