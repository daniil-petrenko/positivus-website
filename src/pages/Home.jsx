import Companies from '@/components/Companies';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import Hero from '@components/Hero'
import Services from '@/components/Services';
import Proposal from '@/components/Proposal';
import Case from '@/components/Case';

const Home = () => {
   return (
      <MainLayout>
         <Hero className="pb-8.75 max-xs:pb-3.5" />
         <Companies className="pt-8.75 pb-17.5 max-xs:py-7.5" />
         <Services className="pt-17.5 pb-15 max-xs:py-7.5" />
         <Proposal className="pt-15 pb-20 max-xs:py-7.5" />
         <Case className="pt-20 pb-17.5 max-xs:py-7.5"/>
      </MainLayout>
   );
};

export default Home;
