import Header from '@components/Header';
import Footer from '@components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;