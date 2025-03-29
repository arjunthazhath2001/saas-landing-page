'use client';
import product from '@/assets/product-image.png'
import Image from "next/image"
import pyramid from '@/assets/pyramid.png';
import tube from '@/assets/tube.png';
import {motion,useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';

export const ProductShowCase= () =>{
    const productRef= useRef(null)
    const {scrollYProgress} = useScroll({
        target:productRef,
        offset: ["start end","end start"]
    })

    const translateY= useTransform(scrollYProgress,[0,1],[150,-150])

    return <section ref={productRef} className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
        <div className="container">
 
            <div className='max-w-[540px] mx-auto'>
            <div className='flex justify-center'>
                <div className='tag'>Boost your productivity</div>
            </div>
            <h2 className='title mt-6'>A more effective way to track progress</h2>
            <p className='text-center text-[22px] leading-[30px] text-[#010D3E] mt-5'>
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
            </p>
            </div>

            <div className='relative'>
                <Image src={product} alt="product-image" className='mt-10'/>
                
                <motion.img width={262} height={262} src={pyramid.src} alt="pyramid-image" className='hidden md:block absolute -top-32 -right-36' style={{translateY:translateY}}/>
                
                <motion.img width={262} height={262} src={tube.src} alt="pyramid-image" className='hidden md:block absolute top-32 -left-44' style={{translateY:translateY}}/>


            </div>

        </div>
    </section>
}