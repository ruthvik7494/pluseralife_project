import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import BrandShowcase from '../components/BrandShowcase/BrandShowcase';
import Domains from '../components/Domains/Domains';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Sourcing from '../components/Sourcing/Sourcing';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <BrandShowcase />
      <FeaturedProducts />
      <Domains />
      <ProductGrid />
      <Sourcing />
      <Banner />
      <Contact />
    </>
  );
};

export default HomePage;
