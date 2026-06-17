import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const Products = () => {
  return (
    <section id="products" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-700 bg-primary-50 rounded-full">
            Bestsellers
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900">
            Our <span className="gradient-text">Premium</span> Collection
          </h2>
          <p className="mt-4 text-primary-800/70 leading-relaxed">
            Handpicked liquid lipsticks loved by thousands — blending rich pigmentation,
            comfortable wear, and a luxurious matte finish.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
