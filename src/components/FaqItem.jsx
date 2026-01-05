import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const SlideDown = ({ isOpen, children }) => {
   return (
      <AnimatePresence initial={false}>
         {isOpen && (
            <motion.div
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: 'auto', opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               transition={{ duration: 0.35, ease: 'easeInOut' }}
               style={{ overflow: 'hidden' }}
            >
               {children}
            </motion.div>
         )}
      </AnimatePresence>
   );
};

const FaqItem = ({ item, index, activeId, changeActiveId }) => {
   const active = activeId === item.id;

   return (
      <div
         className={`relative z-2 mb-7.5 max-sm:mb-5 max-xs:mb-3.5 max-sm:py-7 max-xs:py-3 py-10.25 border border-dark rounded-[45px] transition-colors ${active ? 'bg-green' : 'bg-gray'} shadow-[0_5px_0_0_var(--color-dark)]`}
      >
         <div
            className="group relative flex cursor-pointer items-center justify-between gap-10 max-sm2:gap-3 px-14 max-sm:px-10 max-xs:px-6"
            onClick={() => {
               changeActiveId(activeId === item.id ? null : item.id);
            }}
         >
            <div className="flex-1 flex gap-6.5 items-center">
               <div className="font-medium text-6xl max-lg:hidden">
                  {index < 10 ? '0' : ''}
                  {index + 1}
               </div>
               <div className="font-medium text-[30px] max-sm2:text-2xl transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center">
                  {item.question}
               </div>
            </div>
            <div
               className={clsx(
                  'faq-icon relative flex size-14.5 max-sm2:size-10 items-center justify-center rounded-full border border-black shadow-400 transition-all duration-500 group-hover:border-s4',
                  active && 'before:rotate-90'
               )}
            >
               <div className="g4 size-11/12 rounded-full shadow-300" />
            </div>
         </div>
         <SlideDown isOpen={activeId === item.id}>
            <div className="px-14 max-sm:px-10 max-xs:px-6 pt-7.5 max-sm:pt-6 max-sm2:pt-5 max-xs:pt-0.5">
               <p className="text-[18px] border-t border-black pt-7.5 max-sm:pt-6 max-sm2:pt-5 max-xs:pt-3.5">
                  {item.answer}
               </p>
            </div>
         </SlideDown>
      </div>
   );
};

// import { SlideDown } from 'react-slidedown';
// import 'react-slidedown/lib/slidedown.css';

// const FaqItem = ({ item, index, activeId, changeActiveId }) => {

//    const active = activeId === item.id;

//    return (
//       <div
//          className={`relative z-2 mb-7.5 max-sm:mb-5 max-xs:mb-3.5 max-sm:py-7 max-xs:py-3 py-10.25 border border-dark rounded-[45px] transition-colors ${active ? 'bg-green' : 'bg-gray'} shadow-[0_5px_0_0_var(--color-dark)]`}
//       >
//          <div
//             className="group relative flex cursor-pointer items-center justify-between gap-10 max-sm2:gap-3 px-14 max-sm:px-10 max-xs:px-6"
//             onClick={() => {
//                changeActiveId(activeId === item.id ? null : item.id);
//             }}
//          >
//             <div className="flex-1 flex gap-6.5 items-center">
//                <div className="font-medium text-6xl max-lg:hidden">
//                   {index < 10 ? '0' : ''}
//                   {index + 1}
//                </div>
//                <div className="font-medium text-[30px] max-sm2:text-2xl transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center">
//                   {item.question}
//                </div>
//             </div>
//             <div
//                className={clsx(
//                   'faq-icon relative flex size-14.5 max-sm2:size-10 items-center justify-center rounded-full border border-black shadow-400 transition-all duration-500 group-hover:border-s4',
//                   active && 'before:rotate-90'
//                )}
//             >
//                <div className="g4 size-11/12 rounded-full shadow-300" />
//             </div>
//          </div>
//          <SlideDown>
//             {activeId === item.id && (
//                <div className="px-14 max-sm:px-10 max-xs:px-6 pt-7.5 max-sm:pt-6 max-sm2:pt-5 max-xs:pt-0.5">
//                   <p className="text-[18px] border-t border-black pt-7.5 max-sm:pt-6 max-sm2:pt-5 max-xs:pt-3.5">{item.answer}</p>
//                </div>
//             )}
//          </SlideDown>
//       </div>
//    );
// };

export default FaqItem;
