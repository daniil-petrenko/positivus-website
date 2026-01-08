import { Element } from "react-scroll";

import { useRef } from 'react';
import gsap from 'gsap';
import SplitText from 'gsap/src/SplitText';
import { useGSAP } from '@gsap/react';
import Button from './Button';

import hero from '@assets/images/hero.png';

const Hero = ({ className }) => {
   const title = useRef();
   const text = useRef();
   const button = useRef();
   const image = useRef();

   useGSAP(() => {
      document.fonts.ready.then(() => {
         const titleSplit = new SplitText(title.current, { type: 'lines' });

         gsap.from(titleSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
         });
      });

      gsap.from(text.current, {
         opacity: 0,
         yPercent: 50,
         duration: 1.8,
         ease: 'expo.out',
         delay: 0.5,
      });

      gsap.from(image.current, {
         opacity: 0,
         xPercent: 30,
         duration: 2.8,
         ease: 'expo.out',
         delay: 0.5,
      });

      gsap.from(button.current, {
         opacity: 0,
         yPercent: 50,
         duration: 1.8,
         ease: 'expo.out',
         delay: 0.8,
      });
   }, []);

   return (
      <section id="about-us" className={className}>
         <Element name="About us">  
            <div className="cnt flex max-md:flex-col max-lg:items-center pt-47.25 max-xl:pt-39.25 max-sm:pt-32 max-xs:pt-24">
               <div className="flex-auto pr-27 max-lg:pr-20 max-md:pr-0">
                  <h1
                     ref={title}
                     className="text-6xl font-medium mb-8.75 leading-18 max-lg:text-5xl max-sm2:text-[40px] max-sm2:leading-12 max-lg:leading-16 max-sm:mb-5"
                  >
                     Navigating the digital landscape for success
                  </h1>
                  <div>
                     <p ref={text} className="text-[20px] leading-[140%] mb-8.75 max-sm:mb-5">
                        Our digital marketing agency helps businesses grow and succeed online through a
                        range of services including SEO, PPC, social media marketing, and content
                        creation.
                     </p>
                  </div>
                  <div ref={button}>
                     <Button title="Book a consultation" isWhite={false} className="max-sm:mb-5" />
                  </div>
               </div>
               <div ref={image} className="flex-[0_0_48.3%] max-sm:max-w-125">
                  <img src={hero} alt="Hero Image" />
               </div>
            </div>
         </Element>
      </section>
   );
};

export default Hero;
