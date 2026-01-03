import Button from "./Button";

import hero from "@assets/images/hero.png"

const Hero = ({ className }) => {
   return (
      <section id="about-us" className={className}>
         <div className="cnt flex max-md:flex-col max-lg:items-center">
            <div className="flex-auto pr-27 max-lg:pr-20 max-md:pr-0">
               <h1 className="text-6xl font-medium mb-8.75 leading-18 max-lg:text-5xl max-sm2:text-[40px] max-sm2:leading-12 max-lg:leading-16 max-sm:mb-5">Navigating the digital landscape for success</h1>
               <div>
                  <p className="text-[20px] leading-[140%] mb-8.75 max-sm:mb-5">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
               </div>
               <div>
                  <Button title="Book a consultation" isWhite={false} className="max-sm:mb-5" />
               </div>
            </div>
            <div className="flex-[0_0_48.3%] max-sm:max-w-125">
               <img src={hero} alt="Hero Image" />
            </div>
         </div>
      </section>
   )
};

export default Hero;
