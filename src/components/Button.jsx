const Button = ({ title, isWhite, className }) => {
   return (
      <>
         <button className={`
               cursor-pointer py-5 px-8.75 text-[20px] leading-[140%] text-center rounded-[14px] max-lg:py-3.5 max-lg:px-6 hover:bg-green transition-colors ${className}
               ${isWhite ? "text-black border border-dark bg-white" : "text-white bg-dark"}`}>
            { title }
         </button>
      </>
   )
};

export default Button;
