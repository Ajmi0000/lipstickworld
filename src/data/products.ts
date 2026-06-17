export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  mrp: number;
  price: number;
  shade: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Matte Mousse Liquid Lipstick',
    brand: "Sugar Cosmetics",
    description:
      'A whipped, mousse-like formula that glides on smooth and sets to a soft-matte finish without drying your lips.',
    image:
      'https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b8?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewsCount: 1243,
    mrp: 499,
    price: 399,
    shade: 'Rosewood Mauve',
  },
  {
    id: 2,
    name: 'MARS Liquid Lipstick',
    brand: 'MARS Cosmetics',
    description:
      'Lightweight, richly pigmented liquid lipstick with a velvety matte finish that lasts all day long.',
    image:
      'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewsCount: 982,
    mrp: 399,
    price: 299,
    shade: 'Coral Blush',
  },
  {
    id: 3,
    name: 'Lakme Liquid Matte Lipstick',
    brand: 'Lakmé',
    description:
      'A creamy, fade-resistant matte lipstick enriched with vitamin E for a smooth, comfortable wear.',
    image:
      'https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewsCount: 2156,
    mrp: 599,
    price: 499,
    shade: 'Crimson Velvet',
  },
];

export interface Feature {
  id: number;
  title: string;
  icon: string;
}

export const features: Feature[] = [
  { id: 1, title: 'Matte Finish', icon: '✨' },
  { id: 2, title: 'Waterproof', icon: '💧' },
  { id: 3, title: 'Long Lasting up to 12 Hours', icon: '⏱️' },
  { id: 4, title: 'Soft Creamy Texture', icon: '🌸' },
  { id: 5, title: 'Smudge Proof', icon: '🛡️' },
];
