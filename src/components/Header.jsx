import { Link as LinkScroll } from "react-scroll";
import { useMediaQuery } from 'react-responsive';
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import clsx from 'clsx';

import logo from '@assets/images/logo.svg';

import Button from './Button';
import { navigation } from '@/constants';
import { useEffect, useState } from 'react';

const Header = () => {
   const [hasScrolled, setHasScrolled] = useState(false);
   const [openNavigation, setOpenNavigation] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setHasScrolled(window.scrollY > 32);
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      }

   }, []);

   const isMobile = useMediaQuery({ maxWidth: 479 });

   const toggleNavigation = () => {
      if (openNavigation) {
         setOpenNavigation(false);
         enablePageScroll();
      } else {
         setOpenNavigation(true);
         disablePageScroll();
      }
   };

   const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setOpenNavigation(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="cursor-pointer text-[20px] max-lg:text-[18px] leading-[140%] text-black hover:text-[#4f8c06] transition-colors"
    >
      {title}
    </LinkScroll>
  );

   return (
      <header id="header" className="bg-white fixed top-0 left-0 w-full z-200">
         <div id="headerNavigation" className={clsx("cnt flex items-center transition-all duration-500", hasScrolled ? "xl:py-8 py-6" : "py-15 max-lg:py-12 max-md:py-10 max-sm:py-8 max-xl:py-6")}>
            <div className="relative z-300 mr-7 flex flex-1 justify-start">
               <img className="max-sm2:max-w-36" src={logo} alt="Logo" />
            </div>

            <nav id="mobileNavigation" className={`max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center ${openNavigation ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'} 
               lg:flex mr-10 max-lg:z-100 fixed top-0 left-0 right-0 bottom-0 bg-white lg:static max-lg:bg-white
               max-lg:m-auto max-lg:h-screen max-lg:w-full max-lg:-translate-x-full max-lg:flex-col max-lg:transition-transform`}>
               <ul className={`flex flex-col lg:flex-row items-center gap-10 max-lg:gap-6`}>
                  {navigation.map((item) => (
                     <li className='max-lg:text-center' key={item.id}>
                        <NavLink title={item.title} />
                     </li>
                  ))}
               </ul>

               {isMobile && <Button className="mt-6" title="Request a quote" isWhite={true} />}
            </nav>

            {!isMobile && <Button title="Request a quote" isWhite={true} />}

            <button onClick={toggleNavigation} className="relative z-110 block h-5 w-8 ml-5 lg:hidden">
               <span
                  className={`absolute top-0 left-0 h-px w-full bg-black transition-transform ${openNavigation && 'translate-y-2 rotate-45'}`}
               ></span>
               <span
                  className={`absolute top-1/2 left-0 h-px w-full bg-black transition-transform ${openNavigation && 'rotate-45 opacity-0'}`}
               ></span>
               <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-black transition-transform ${openNavigation && '-translate-y-2.75 -rotate-45'}`}
               ></span>
            </button>
         </div>
      </header>
   );
};

export default Header;
