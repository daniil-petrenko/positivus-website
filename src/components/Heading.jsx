const Heading = ({ title, text }) => {
   return (
      <div className="flex gap-10 items-start max-sm:flex-col max-sm:gap-6 max-xs:gap-5 mb-20 max-md:mb-15 max-sm:mb-10">
         <h2 className="font-medium text-[40px] bg-green px-1.75 rounded-[7px] inline-block">{title}</h2>
         <div className="max-w-145">
            <p className="text">{text}</p>
         </div>
      </div>
   )
};

export default Heading;
