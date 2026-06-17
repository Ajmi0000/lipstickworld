import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiOutlineShoppingBag } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#features' },
  { label: 'Shop', href: '#products' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#footer' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 py-3 rounded-full transition-all duration-300 ${
          scrolled ? 'glass shadow-glass' : 'bg-transparent'
        }`}
      >
        <a href="#home" className="font-display text-2xl md:text-3xl font-semibold gradient-text">
          LumièreLips
        </a>

        <ul className="hidden md:flex items-center gap-8 font-medium text-primary-800">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative group transition-colors hover:text-primary-600"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-400 to-rose-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-rose-400 text-white font-semibold shadow-glow"
          >
            <HiOutlineShoppingBag className="text-lg" />
            Cart
          </motion.button>
        </div>

        <button
          className="md:hidden text-3xl text-primary-700"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mx-4 mt-2 glass rounded-3xl overflow-hidden shadow-glass"
          >
            <ul className="flex flex-col items-center gap-5 py-6 font-medium text-primary-800">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-rose-400 text-white font-semibold shadow-glow">
                  <HiOutlineShoppingBag className="text-lg" />
                  Cart
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
