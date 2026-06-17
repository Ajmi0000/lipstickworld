import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Reviews />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
