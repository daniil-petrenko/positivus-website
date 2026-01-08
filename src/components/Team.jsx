import React, { useRef } from 'react';
import Heading from './Heading';
import { team } from '@/constants';
import TeamItem from './TeamItem';
import Button from './Button';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Team = ({ className }) => {
   const button = useRef();

   useGSAP(() => {
      const headingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: "#team",
            start: "10% bottom",
         },
      });

      headingTimeline
         .from("#team .heading-title", {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
         })
         .from("#team .heading-text", {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
         }, '-=0.3');

      const teamTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: '#team',
            start: "top 75%",
         }
      })

      teamTimeline
         .from(document.querySelectorAll('.team-item'), {
            opacity: 0,
            duration: 2,
            stagger: 0.07
         })
         
      gsap.from(button.current, {
         scrollTrigger: {
            trigger: button.current,
            start: "30% bottom",
         },
         opacity: 0,
         xPercent: 10,
         duration: 0.8,
      });
   }, []);

   return (
      <section id="team" className={className}>
         <div className="cnt">
            <Heading
               title="Team"
               text="Meet the skilled and experienced team behind our successful digital marketing strategies"
               maxWidth="max-w-[473px]"
            />
            <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-lg:gap-8 max-md:gap-6 max-xs:gap-4 max-sm:grid-cols-1 mb-10 max-sm:mb-7.5 max-xs:mb-5">
               {team.map((item) => (
                  <TeamItem key={item.id} item={item} />
               ))}
            </div>
            <div ref={button} className='flex w-full justify-end'>
               <Button title={'See all team'} isWhite={false} className="w-67.25 max-xs:w-full" />
            </div>
         </div>
      </section>
   );
};

export default Team;
