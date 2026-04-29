import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Values from './components/Values/Values';
import Domains from './components/Domains/Domains';
import Sourcing from './components/Sourcing/Sourcing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <Domains />
        <Sourcing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
