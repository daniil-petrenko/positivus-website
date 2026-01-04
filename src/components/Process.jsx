import { faq } from "@/constants"
import { useState } from 'react';
import Heading from "./Heading"
import FaqItem from "./FaqItem"

const Process = ({ className }) => {
   const [activeId, setActiveId] = useState(null);

   function changeActiveId(id) {
      setActiveId(id)
   }

   return (
      <section className={className}>
         <div className="cnt">
            <Heading title="Our Working Process" text="Step-by-Step Guide to Achieving Your Business Goals" maxWidth="max-w-[292px]" />
            <div>
               {
                  faq.map((item, index) => (
                     <FaqItem key={item.id} item={item} index={index} activeId={activeId} changeActiveId={changeActiveId} />
                  ))
               }
            </div>
         </div>
      </section>
   )
}

export default Process