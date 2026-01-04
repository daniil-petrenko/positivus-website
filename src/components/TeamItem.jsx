import React from 'react';

const TeamItem = ({ item }) => {
   return (
      <div className="border border-black bg-white shadow-[0_5px_0_0_var(--color-dark)] rounded-[45px] py-11.25 px-8.5 max-sm:py-8 max-sm:px-6 flex flex-col h-full">
         <div className="grid grid-rows-[150px_1fr] max-sm2:grid-rows-[auto_1fr] h-full">
            <div className="flex max-sm2:flex-col gap-5 border-b border-black">
               <div className="self-center">
                  <img src={item.imageUrl} alt={item.name} />
               </div>
               <div className="flex flex-col flex-1 pb-7 max-sm2:pb-5 max-sm:pb-3 justify-between">
                  <div className="flex justify-end mb-4.75">
                     <a href={item.linkedinUrl} className="inline-block group">
                        <svg
                           className="group-hover:fill-[#4f8c06] fill-green transition-colors"
                           width="34"
                           height="34"
                           viewBox="0 0 34 34"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <circle cx="17" cy="17" r="17" fill="black" />
                           <path d="M8.31776 25H11.8131V13.6844H8.31776V25Z" />
                           <path d="M8 10.0719C8 11.1875 8.90031 12.0906 10.0654 12.0906C11.1776 12.0906 12.0779 11.1875 12.0779 10.0719C12.0779 8.95625 11.1776 8 10.0654 8C8.90031 8 8 8.95625 8 10.0719Z" />
                           <path d="M21.4517 25H25V18.7844C25 15.7562 24.3115 13.3656 20.7632 13.3656C19.0685 13.3656 17.9034 14.3219 17.4268 15.225H17.3738V13.6844H14.0374V25H17.5327V19.4219C17.5327 17.9344 17.7975 16.5 19.6511 16.5C21.4517 16.5 21.4517 18.2 21.4517 19.475V25Z" />
                        </svg>
                     </a>
                  </div>

                  <div className="">
                     <h4 className="font-medium text-[20px]">{item.name}</h4>
                     <span className="text-[18px]">{item.position}</span>
                  </div>
               </div>
            </div>

            <div className="text-[18px] pt-7 max-sm2:pt-5 max-sm:pt-3">
               <p>{item.desc}</p>
            </div>
         </div>
      </div>
   );
};

// mt-7

export default TeamItem;
