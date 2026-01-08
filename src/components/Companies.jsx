import { companies } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Companies = ({ className }) => {
   useGSAP(() => {
      const elements = document.querySelectorAll(".company");

      gsap.from(elements, {
         scrollTrigger: {
            trigger: "#companies",
            start: "top 80%", 
         },
         yPercent: 70,
         opacity: 0,
         duration: 1.5,
         stagger: 0.05,
      });
   }, []);

   return (
      <section id="companies" className={className}>
         <div className="cnt">
            <ul className="flex justify-between flex-wrap gap-8">
               {companies.map(item => (
                  <li key={item.id} className="company max-sm2:max-w-28">
                     <img src={item.imageUrl} className="grayscale" alt={item.alt} />
                  </li>
               ))}
            </ul>
            
         </div>
      </section>
   )
}

export default Companies;
