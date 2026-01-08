import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Button from './Button';
import proposal from '@assets/images/proposal/proposal.png';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Proposal = ({ className }) => {
   const title = useRef(); 
   const text = useRef(); 
   const button = useRef(); 
   const image = useRef(); 
   
   useGSAP(() => {
      const timeline = gsap.timeline({
         scrollTrigger: {
            trigger: "#proposal",
            start: "30% bottom",
         },
      });

      timeline
         .from(title.current, {
            yPercent: 100,
            duration: 0.5,
            opacity: 0,
         })
         .from(text.current, {
            yPercent: 50,
            opacity: 0,
            duration: 0.5,
         }, '-=0.3')
         .from(button.current, {
            yPercent: 30,
            opacity: 0,
            duration: 0.5,
         }, '-=0.3')
         .from(image.current, {
            opacity: 0,
            duration: 1,
         }, '-=1');
   }, [])

   return (
      <section id="proposal" className={className}>
         <div className="cnt">
            <div className="flex max-sm:flex-col max-sm:gap-10 max-xs:gap-7 sm:items-center bg-gray rounded-[45px] w-full relative p-15 max-sm:p-12 max-sm2:p-9 max-xs:p-6">
               <div>
                  <h2 ref={title} className="mb-6.5 font-medium text-[30px] max-w-125">
                     Let’s make things happen
                  </h2>
                  <div className="max-w-125 mb-6.5">
                     <p ref={text} className="text-[18px]">
                        Contact us today to learn more about how our digital marketing services can
                        help your business grow and succeed online.
                     </p>
                  </div>
                  <div ref={button}>
                     <Button title="Get your free proposal" isWhite={false} />
                  </div>
                  
               </div>
               <div ref={image} className="static max-sm:self-center max-sm:max-w-75 max-xs:max-w-50 sm:absolute right-33.75 top-[50%] sm:-translate-y-[50%] max-lg:right-15 max-md:-right-30">
                  <img src={proposal} alt="Image" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Proposal;
