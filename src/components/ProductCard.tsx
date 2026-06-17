import { motion } from 'framer-motion';
import { HiStar, HiOutlineShoppingCart } from 'react-icons/hi';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
      className="group relative glass-strong rounded-3xl p-5 shadow-glass overflow-hidden flex flex-col transition-shadow hover:shadow-glow"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary-300/40 to-rose-300/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

      {/* Discount badge */}
      {discount > 0 && (
        <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-primary-600 to-rose-400 text-white shadow-md">
          {discount}% OFF
        </span>
      )}

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl aspect-square mb-5">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent" />
      </div>

      {/* Brand */}
      <span className="text-xs uppercase tracking-widest font-semibold text-primary-500 mb-1">
        {product.brand}
      </span>

      {/* Name */}
      <h3 className="font-display text-xl font-semibold text-primary-900 mb-1.5 leading-snug">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-primary-800/70 mb-3 leading-relaxed flex-grow">
        {product.description}
      </p>

      {/* Shade */}
      <p className="text-sm font-medium text-primary-700 mb-3">
        Shade: <span className="font-semibold">{product.shade}</span>
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-50 text-primary-700">
          <HiStar className="text-amber-400" />
          <span className="font-semibold text-sm">{product.rating}</span>
        </div>
        <span className="text-xs text-primary-700/60">
          ({product.reviewsCount.toLocaleString()} reviews)
        </span>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between mt-auto">
        <div>
          <span className="text-2xl font-bold text-primary-900">₹{product.price}</span>
          {discount > 0 && (
            <span className="ml-2 text-sm text-primary-700/50 line-through">
              ₹{product.mrp}
            </span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-rose-400 text-white font-semibold text-sm shadow-glow transition-all"
        >
          <HiOutlineShoppingCart className="text-lg" />
          Add to Cart
        </motion.button>
      </div>
    </motion.article>
  );
};

export default ProductCard;
