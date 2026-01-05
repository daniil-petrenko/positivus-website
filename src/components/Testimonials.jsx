import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Heading from './Heading';
import { testimonials } from '@/constants';

const Testimonials = ({ className }) => {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);

   return (
      <section className={className}>
         <div className="cnt">
            <Heading
               title="Testimonials"
               text="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
               maxWidth="max-w-[473px]"
            />
            <div className="pt-21 pb-17 max-sm:pt-14 max-sm:pb-14 max-sm2:pt-11 max-sm2:pb-11 rounded-[45px] bg-dark">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1.5}
                  slidesOffsetBefore={310}
                  slidesOffsetAfter={15}
                  navigation={{
                     prevEl: prevRef.current,
                     nextEl: nextRef.current,
                  }}
                  pagination={{
                     el: paginationRef.current,
                     clickable: true,
                     renderBullet: (index, className) => {
                        return `
                           <button class="${className} custom-bullet">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                 d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                                 fill="currentColor"
                                 />
                              </svg>
                           </button>
                        `;
                     },
                  }}
                  onBeforeInit={(swiper) => {
                     swiper.params.navigation.prevEl = prevRef.current;
                     swiper.params.navigation.nextEl = nextRef.current;
                     swiper.params.pagination.el = paginationRef.current;
                  }}
                  breakpoints={{
                     320: { 
                        slidesOffsetBefore: 15,
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                     },
                     480: { 
                        slidesOffsetBefore: 40,
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                     },  
                     768: { 
                        slidesOffsetBefore: 70,
                        slidesPerView: 1.5,
                        spaceBetween: 50,
                     },   
                     991: { slidesOffsetBefore: 100 },   
                     1024: { slidesOffsetBefore: 200 }, 
                  }}
               >
                  {testimonials.map((item) => (
                     <SwiperSlide className="">
                        <div className="mb-12 relative z-2 border border-green rounded-[45px]">
                           <div className="bg-dark rounded-[45px] p-13 max-sm2:p-7 max-xs:px-4 relative z-5">
                              <div>
                                 <p className="text-white text-[18px]">{item.text}</p>
                              </div>
                           </div>
                           <div className="absolute bottom-0 left-14 bg-dark rotate-45 -z-2 translate-y-[49%] border border-green w-9.75 h-9.75"></div>
                        </div>
                        <h4 className="font-medium text-[20px] text-green sm:ml-20">{item.author}</h4>
                        <span className="text-[18px] text-white sm:ml-20">{item.position}</span>
                     </SwiperSlide>
                  ))}

                  <div className="mt-14 max-sm:mt-10 mx-auto flex items-center justify-center gap-8 max-w-144.5 px-3.5">
                     <button
                        ref={prevRef}
                        className="cursor-pointer -rotate-180 text-white transition [&.swiper-button-disabled]:text-[rgba(255,255,255,0.3)] [&.swiper-button-disabled]:cursor-auto"
                     >
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.5 9.5459C0.671573 9.5459 1.44847e-07 10.2175 0 11.0459C-1.44847e-07 11.8743 0.671573 12.5459 1.5 12.5459L1.5 9.5459ZM22.5607 12.1066C23.1464 11.5208 23.1464 10.571 22.5607 9.98524L13.0147 0.439299C12.4289 -0.146488 11.4792 -0.146488 10.8934 0.439298C10.3076 1.02509 10.3076 1.97483 10.8934 2.56062L19.3787 11.0459L10.8934 19.5312C10.3076 20.117 10.3076 21.0667 10.8934 21.6525C11.4792 22.2383 12.4289 22.2383 13.0147 21.6525L22.5607 12.1066ZM1.5 12.5459L21.5 12.5459L21.5 9.5459L1.5 9.5459L1.5 12.5459Z" fill="currentColor" />
                        </svg>
                     </button>

                     <div ref={paginationRef} className="swiper-pagination static! flex gap-2 h-3.5 items-center justify-center" />

                     <button
                        ref={nextRef}
                        className="cursor-pointer text-white transition [&.swiper-button-disabled]:text-[rgba(255,255,255,0.3)] [&.swiper-button-disabled]:cursor-auto"
                     >
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.5 9.5459C0.671573 9.5459 1.44847e-07 10.2175 0 11.0459C-1.44847e-07 11.8743 0.671573 12.5459 1.5 12.5459L1.5 9.5459ZM22.5607 12.1066C23.1464 11.5208 23.1464 10.571 22.5607 9.98524L13.0147 0.439299C12.4289 -0.146488 11.4792 -0.146488 10.8934 0.439298C10.3076 1.02509 10.3076 1.97483 10.8934 2.56062L19.3787 11.0459L10.8934 19.5312C10.3076 20.117 10.3076 21.0667 10.8934 21.6525C11.4792 22.2383 12.4289 22.2383 13.0147 21.6525L22.5607 12.1066ZM1.5 12.5459L21.5 12.5459L21.5 9.5459L1.5 9.5459L1.5 12.5459Z" fill="currentColor" />
                        </svg>
                     </button>
                  </div>
               </Swiper>
               
            </div>
         </div>
      </section>
   );
};

export default Testimonials;
