import { motion } from 'framer-motion';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';

const footerLinks: Record<string, string[]> = {
  Shop: ['Liquid Lipsticks', 'Matte Collection', 'Gift Sets', 'New Arrivals'],
  Brand: ['About Us', 'Our Story', 'Sustainability', 'Careers'],
  Support: ['Shipping & Returns', 'FAQs', 'Track Order', 'Contact Us'],
};

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-primary-900 text-primary-50 overflow-hidden">
      <div className="absolute -top-24 left-1/3 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 right-10 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-semibold mb-4">LumièreLips</h3>
            <p className="text-primary-200/80 leading-relaxed mb-6 max-w-sm">
              Premium liquid lipsticks crafted for elegance — matte finish, long-lasting wear,
              and a luxurious feel in every shade.
            </p>
            <div className="flex gap-3">
              {[FaInstagram, FaFacebookF, FaTwitter, FaPinterestP].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full glass text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-rose-400 transition-all"
                  aria-label="Social link"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-4 text-white">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-200/75 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-primary-200/80">
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-lg" /> hello@lumierelips.com
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-lg" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-lg" /> Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-primary-200/70">
          <p>© {new Date().getFullYear()} LumièreLips. All rights reserved.</p>
          <p>Crafted with 💜 for beauty lovers everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
