import Image from "next/image";
import logo from "@/assets/logosaas.png";
import Linkedin from '@/assets/social-linkedin.svg'
import Insta from '@/assets/social-insta.svg'
import X from '@/assets/social-x.svg'
import Pinterest from '@/assets/social-pin.svg'
import Youtube from '@/assets/social-youtube.svg'




export const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container">
        <div className="flex flex-col gap-4 justify-center  items-center">
          <Image src={logo} width={50} height={50} alt="logo" />
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center text-white/80">
            <a>About</a>
            <a>Features</a>
            <a>Customers</a>
            <a>Pricing</a>
            <a>Help</a>
            <a>Careers</a>
          </div>
        </div>

        <div className="flex max-w-52 mt-7 mx-auto gap-2">
            <X className="social"/>
            <Insta className="social"/>
            <Linkedin className="social"/>
            <Pinterest className="social"/>
            <Youtube className="social"/>
        </div>

        <div className="text-white/80 text-sm text-center mt-6">
            &copy; 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
