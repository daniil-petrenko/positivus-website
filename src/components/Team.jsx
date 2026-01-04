import React from 'react';
import Heading from './Heading';
import { team } from '@/constants';
import TeamItem from './TeamItem';
import Button from './Button';

const Team = ({ className }) => {
   return (
      <section className={className}>
         <div className="cnt">
            <Heading
               title="Team"
               text="Meet the skilled and experienced team behind our successful digital marketing strategies"
               maxWidth="max-w-[473px]"
            />
            <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-lg:gap-8 max-md:gap-6 max-xs:gap-4 max-sm:grid-cols-1 mb-10 max-sm:mb-7.5 max-xs:mb-5">
               {team.map((item) => (
                  <TeamItem key={item.id} item={item} />
               ))}
            </div>
            <div className='flex w-full justify-end'>
               <Button title={'See all team'} isWhite={false} className="w-67.25 max-xs:w-full" />
            </div>
         </div>
      </section>
   );
};

export default Team;
