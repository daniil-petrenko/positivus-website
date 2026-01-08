import { Element } from "react-scroll";

import { services } from "@/constants"
import Heading from "./Heading"
import ServicesItem from "./ServicesItem"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ className }) => {
   useGSAP(() => {
      const headingTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: "#services",
            start: "3% bottom",
         },
      });

      headingTimeline
         .from("#services .heading-title", {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
         })
         .from("#services .heading-text", {
            yPercent: 100,
            opacity: 0,
            duration: 0.5,
         }, '-=0.3');

      const servicesTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: '#servicesItems',
            start: "7% bottom",
         }
      })

      servicesTimeline
         .from(document.querySelectorAll('.services-item'), {
            opacity: 0,
            duration: 1,
            stagger: 0.05
         })
   }, []);

   const colors = ['gray', 'green', 'dark'];

   return (
      <section id="services" className={className}>
         <Element name="Services"> 
            <div className="cnt">
               <Heading title="Services" text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
               <div id="servicesItems" className="grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-6">
                  {
                     services.map((item, index) => (
                        <ServicesItem key={item.id} title={item.title} imageURL={item.imageURL} titleColor={item.titleColor} color={colors[(index % 3)]}/>
                     ))
                  }
               </div>
            </div>
         </Element>
      </section>
   )
}

export default Services