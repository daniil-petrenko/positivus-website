import { services } from "@/constants"
import Heading from "./Heading"
import ServicesItem from "./ServicesItem"

const Services = ({ className }) => {
   const colors = ['gray', 'green', 'dark'];

   return (
      <section id="services" className={className}>
         <div className="cnt">
            <Heading title="Services" text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
            <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-6">
               {
                  services.map((item, index) => (
                     <ServicesItem key={item.id} title={item.title} imageURL={item.imageURL} titleColor={item.titleColor} color={colors[(index % 3)]}/>
                  ))
               }
            </div>
         </div>
      </section>
   )
}

export default Services