import { faq } from "@/constants"
import { useState } from 'react';
import Heading from "./Heading"
import FaqItem from "./FaqItem"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Process = ({ className }) => {
   useGSAP(() => {
      const headingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: "#process",
            start: "top bottom",
         },
      });

      headingTimeline
         .from("#process .heading-title", {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
         })
         .from("#process .heading-text", {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
         }, '-=0.3');

      const processTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: '#process',
            start: "30% bottom",
         }
      })

      processTimeline
         .from(document.querySelectorAll('.faq-item'), {
            opacity: 0,
            xPercent: -50,
            duration: 1,
            stagger: 0.07
         })
   }, []);


   const [activeId, setActiveId] = useState(null);

   function changeActiveId(id) {
      setActiveId(id)
   }

   return (
      <section id="process" className={className}>
         <div className="cnt">
            <Heading title="Our Working Process" text="Step-by-Step Guide to Achieving Your Business Goals" maxWidth="max-w-[292px]" />
            <div>
               {
                  faq.map((item, index) => (
                     <FaqItem key={item.id} item={item} index={index} activeId={activeId} changeActiveId={changeActiveId} />
                  ))
               }
            </div>
         </div>
      </section>
   )
}

export default Process