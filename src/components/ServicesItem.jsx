const ServicesItem = ({ title, imageURL, color, titleColor }) => {
   return (
      <div
         className={`flex justify-between max-xs:flex-col max-xs:gap-6 max-sm:p-9 max-xs:p-6 xs:items-center min-h-77.5 p-12.5 border rounded-[45px] bg-${color} shadow-[0_5px_0_0_var(--color-dark)]`}
      >
         <div className="flex flex-col h-full">
            <h3 className="flex flex-col flex-[1_1_auto] font-medium text-[30px] max-xl:mb-5">
               {title.map((row) => (
                  <span
                     className={`whitespace-nowrap w-fit px-1.75 rounded-[7px] bg-${titleColor} leading-11`}
                  >
                     {row}
                  </span>
               ))}
            </h3>
            <a href="" className="flex items-center gap-3.75 group">
               {color === 'dark' ? (
                  <svg
                     width="41"
                     height="41"
                     viewBox="0 0 41 41"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                     <path className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 translate-0 transition-transform"
                        d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                        fill="black"
                     />
                  </svg>
               ) : (
                  <svg
                     width="41"
                     height="41"
                     viewBox="0 0 41 41"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="20.5" cy="20.5" r="20.5" fill="#191A23" />
                     <path className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 translate-0 transition-transform"
                        d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                        fill="#B9FF66"
                     />
                  </svg>
               )}

               <span className={`text-[20px] leading-[140%] group-hover:text-[#4f8c06] transition-colors ${color === 'dark' && 'text-white'}`}>
                  Learn more
               </span>
            </a>
         </div>
         <div>
            <img src={imageURL} alt="Image" />
         </div>
      </div>
   );
};

export default ServicesItem;
