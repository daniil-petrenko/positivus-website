import Heading from './Heading';
import Button from './Button';
import contact from '@assets/images/contact/contact.png';

const Contact = ({ className }) => {
   return (
      <section className={className}>
         <div className="cnt">
            <Heading
               title="Contact Us"
               text="Connect with Us: Let's Discuss Your Digital Marketing Needs"
               maxWidth="max-w-[323px]"
            />
            <div className="bg-gray rounded-[45px] pt-15 max-sm2:pt-10 pb-20 max-sm2:pb-10 pl-25 max-md:px-3.5 flex items-center gap-7.5 relative">
               <div className="flex-1 relative z-2">
                  <form action="#" className="sm:max-w-139">
                     <div className="flex max-sm:flex-col max-sm:gap-4 gap-8.75 mb-10 max-sm:mb-8 max-xs:mb-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                           <input type="radio" name="contact" className="peer sr-only" />            
                           <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center 
                                             peer-checked:[&>div]:scale-100">                          
                              <div className="w-4 h-4 bg-green rounded-full scale-0 transition-transform origin-center"></div>
                           </div>
                           
                           <span className="text-[18px]">Say Hi</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer group">
                           <input type="radio" name="contact" className="peer sr-only" />            
                           <div className="w-7 h-7 border border-black rounded-full flex items-center justify-center 
                                             peer-checked:[&>div]:scale-100">                          
                              <div className="w-4 h-4 bg-green rounded-full scale-0 transition-transform origin-center"></div>
                           </div>
                           
                           <span className="text-[18px]">Get a Quote</span>
                        </label>
                     </div>

                     <div className="mb-6.25 max-xs:mb-4">
                        <label className="leading-[175%] mb-1.25 block" htmlFor="name">
                           Name
                        </label>
                        <input
                           className="focus:outline-none w-full py-4.5 px-7.5 placeholder-[#898989] bg-white border border-black rounded-[14px]"
                           type="text"
                           id="name"
                           name="name"
                           placeholder="Name"
                        />
                     </div>
                     <div className="mb-6.25 max-xs:mb-4">
                        <label className="leading-[175%] mb-1.25 block" htmlFor="email">
                           Email*
                        </label>
                        <input
                           className="focus:outline-none w-full py-4.5 px-7.5 placeholder-[#898989] bg-white border border-black rounded-[14px]"
                           type="email"
                           id="email"
                           name="email"
                           placeholder="Email"
                        />
                     </div>
                     <div className="mb-10 max-sm:mb-7 max-xs:mb-4">
                        <label className="leading-[175%] mb-1.25 block" htmlFor="message">
                           Message*
                        </label>
                        <textarea
                           className="focus:outline-none w-full h-47.5 py-4.5 px-7.5 placeholder-[#898989] bg-white border border-black rounded-[14px]"
                           type="message"
                           id="message"
                           name="message"
                           placeholder="Message"
                        />
                     </div>
                     <Button
                        title="Send Message"
                        isWhite={false}
                        className="w-full"
                        type="submit"
                     />
                  </form>
               </div>
               <div className='max-md:max-w-50 max-sm:absolute max-sm:opacity-30 max-sm:top-[50%] max-sm:right-0 max-sm:z-1 max-sm:translate-y-[-50%] max-sm:max-w-75'>
                  <img className="w-full" src={contact} alt="" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
