import { companies } from "@/constants";

const Companies = ({ className }) => {
   return (
      <section className={className}>
         <div className="cnt">
            <ul className="flex justify-between flex-wrap gap-8">
               {companies.map(item => (
                  <li key={item.id} className="max-sm2:max-w-28">
                     <img src={item.imageUrl} className="grayscale" alt={item.alt} />
                  </li>
               ))}
            </ul>
            
         </div>
      </section>
   )
}

export default Companies;
