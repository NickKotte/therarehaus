export interface Product {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 'modern-lounge-chair',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    title: 'Modern Lounge Chair',
    location: 'Copenhagen',
    price: '$1,299',
    category: 'furniture',
    description: 'Ergonomic design meets contemporary aesthetics in this sophisticated lounge chair.',
  },
  {
    id: 'minimalist-desk',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    title: 'Minimalist Desk',
    location: 'Stockholm',
    price: '$899',
    category: 'furniture',
    description: 'Clean lines and functional design define this minimalist workspace solution.',
  },
  {
    id: 'accent-table',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800',
    title: 'Accent Table',
    location: 'Helsinki',
    price: '$449',
    category: 'furniture',
    description: 'A versatile accent piece that adds character to any room.',
  },
  {
    id: 'pendant-light',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=800',
    title: 'Pendant Light',
    location: 'Oslo',
    price: '$299',
    category: 'lighting',
    description: 'Sculptural lighting that creates ambient illumination and visual interest.',
  },
  {
    id: 'storage-unit',
    image: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=800',
    title: 'Storage Unit',
    location: 'Amsterdam',
    price: '$799',
    category: 'storage',
    description: 'Modular storage solution that combines form and function.',
  },
  {
    id: 'dining-chair-set',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800',
    title: 'Dining Chair Set',
    location: 'Berlin',
    price: '$1,599',
    category: 'furniture',
    description: 'Set of four dining chairs featuring timeless design and comfort.',
  },
];