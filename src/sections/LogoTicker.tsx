import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png' 
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'

export const LogoTicker = ()=>{
    return <section className='py-8 md:py-12'>

        <div className='container'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <div className='flex gap-14'>
                <Image src={acmeLogo} alt="Acme" className='logo-ticker'/>
                <Image src={quantumLogo} alt="Quantum" className='logo-ticker'/>
                <Image src={echoLogo} alt="Echo" className='logo-ticker'/>
                <Image src={celestialLogo} alt="Celestial" className='logo-ticker'/>
                <Image src={pulseLogo} alt="Pulse" className='logo-ticker'/>
                <Image src={apexLogo} alt="Apex" className='logo-ticker'/>

            </div>
            </div>

        </div>
    
    </section>
}