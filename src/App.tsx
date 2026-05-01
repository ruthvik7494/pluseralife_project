import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import About from './components/About/About';
import Values from './components/Values/Values';
import BrandShowcase from './components/BrandShowcase/BrandShowcase';
import Domains from './components/Domains/Domains';
import Sourcing from './components/Sourcing/Sourcing';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BrandShowcase />

        <FeaturedProducts />
        <Hero />
        <About />
        <Domains />
        <Values />


        <Sourcing />
        <Banner />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
