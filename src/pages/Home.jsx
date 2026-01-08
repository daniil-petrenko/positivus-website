import Companies from '@/components/Companies';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import Hero from '@components/Hero'
import Services from '@/components/Services';
import Proposal from '@/components/Proposal';
import Case from '@/components/Case';
import Process from '@/components/Process';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
   return (
      <MainLayout>
         <Hero className="pb-8.75 max-md:pb-6 max-xs:pb-3.5" />
         <Companies className="pt-8.75 max-md:pb-12 pb-17.5 max-xs:py-7.5" />
         <Services className="pt-17.5 pb-15 max-md:py-12 max-xs:py-7.5" />
         <Proposal className="pt-15 pb-20 max-md:py-11 max-xs:py-7.5" />
         <Case className="pt-20 pb-17.5 max-md:py-12 max-xs:py-7.5"/>
         <Process className="pt-17.5 pb-17.5 max-md:py-12 max-xs:py-7.5" />
         <Team className="pt-17.5 pb-12.5 max-md:py-10 max-xs:py-7.5" />
         <Testimonials className="pt-12.5 pb-17.5 max-md:py-10 max-xs:py-7.5" />
         <Contact className="pt-17.5 pb-35 max-md:pb-25 max-sm:pb-17.5 max-xs:py-13" />
      </MainLayout>
   );
};

export default Home;
