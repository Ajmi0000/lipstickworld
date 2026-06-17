import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  badge: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Ananya Sharma',
    avatar: '/assets/images/1.png',
    rating: 5,
    comment:
      'The texture feels so creamy yet sets to a perfect matte finish. Lasted through my entire workday without drying my lips!',
    badge: 'Verified Buyer',
  },
  {
    id: 2,
    name: 'Riya Kapoor',
    avatar: '/assets/images/2.png',
    rating: 5,
    comment:
      'Absolutely love the pigmentation and how lightweight it feels. The Crimson Velvet shade is stunning for evening looks.',
    badge: 'Top Reviewer',
  },
  {
    id: 3,
    name: 'Meera Nair',
    avatar: '/assets/images/3.png',
    rating: 4.5,
    comment:
      'Smudge-proof claims are real — tested it through a long brunch and it stayed flawless. Packaging feels so premium too.',
    badge: 'Beauty Insider',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="relative py-24 animated-bg overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-primary-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary-700 bg-white/60 glass rounded-full">
            Loved by Thousands
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-6 shadow-glass flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-primary-900">{review.name}</p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-gradient-to-r from-primary-100 to-rose-100 text-primary-700">
                    {review.badge}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar
                    key={i}
                    className={i < Math.round(review.rating) ? 'opacity-100' : 'opacity-25'}
                  />
                ))}
                <span className="ml-1 text-sm font-semibold text-primary-800">
                  {review.rating}
                </span>
              </div>

              <p className="text-sm text-primary-800/80 leading-relaxed">“{review.comment}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
