import Header from '@components/Header';
import Footer from '@components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className='main pt-47.25 max-xl:pt-39.25 max-sm:pt-32 max-xs:pt-24'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;