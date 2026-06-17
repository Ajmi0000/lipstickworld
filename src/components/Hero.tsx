import { motion } from 'framer-motion';
import { features } from '../data/products';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-hero-gradient animated-bg"
    >
      {/* Decorative glow blobs */}
      <div className="absolute top-10 -left-32 w-96 h-96 bg-primary-300/40 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-rose-400/30 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block px-4 py-1.5 mb-5 text-sm font-semibold text-primary-700 bg-white/60 glass rounded-full shadow-sm"
          >
            ✨ New Collection 2026
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-900"
          >
            Luxury Liquid <span className="gradient-text">Lipsticks</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg text-primary-800/80 max-w-xl leading-relaxed"
          >
            Indulge in our premium matte liquid lipstick collections, crafted with
            silky-smooth formulas that glide effortlessly and stay flawless for hours.
            From timeless nudes to bold reds, discover shades made to elevate every look.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-6 flex flex-wrap gap-3">
            {['Velvet Rouge', 'Nude Nectar', 'Berry Bliss'].map((collection) => (
              <span
                key={collection}
                className="px-4 py-1.5 text-sm font-medium rounded-full glass text-primary-800 shadow-sm"
              >
                {collection}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="mt-10 flex items-center gap-5">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-rose-400 text-white font-semibold text-lg shadow-glow transition-all"
            >
              Shop Now
            </motion.a>
            <a
              href="#features"
              className="font-semibold text-primary-700 hover:text-primary-900 transition-colors underline-offset-4 hover:underline"
            >
              Explore Collections
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="relative">
          {/* Floating product mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto mb-8 w-48 md:w-60"
          >
            <motion.img
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              src="https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b8?auto=format&fit=crop&w=500&q=80"
              alt="Luxury liquid lipstick product mockup"
              className="w-full rounded-3xl shadow-2xl object-cover aspect-[3/4] border-4 border-white/70"
            />
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary-400/40 to-rose-300/40 blur-2xl rounded-full" />
          </motion.div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`glass rounded-2xl p-4 shadow-glass flex flex-col items-center text-center gap-2 ${
                  i === features.length - 1 ? 'col-span-2' : ''
                }`}
              >
                <span className="text-3xl">{feature.icon}</span>
                <p className="font-semibold text-primary-900 text-sm md:text-base">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Floating decorative blobs */}
          <motion.div
            animate={{ y: [0, 14, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden md:block absolute -top-10 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary-300 to-rose-300 opacity-60 blur-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
