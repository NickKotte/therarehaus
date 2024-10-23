export interface Artwork {
  id: string;
  images: string[];
  title: string;
  location: string;
  date: string;
  description: string;
  dimensions?: string;
  medium?: string;
  artist?: string;
  alt: string;
  span: string;
}

export const artworks: Artwork[] = [
  {
    id: 'abstract-harmony',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&q=80&w=800',
    ],
    title: 'Abstract Harmony',
    location: 'New York Gallery',
    date: '2023',
    description: 'A mesmerizing exploration of color and form, this piece invites viewers to contemplate the interplay of abstract elements and emotional resonance.',
    dimensions: '48" × 60"',
    medium: 'Oil on canvas',
    artist: 'Elena Chen',
    alt: 'Abstract painting featuring harmonious color combinations',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 'urban-perspective',
    images: [
      'https://images.unsplash.com/photo-1586953208479-8684e036d889?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?auto=format&fit=crop&q=80&w=800',
    ],
    title: 'Urban Perspective',
    location: 'London Exhibition',
    date: '2024',
    description: 'A striking commentary on modern urban life, capturing the dynamic energy and architectural beauty of city landscapes.',
    dimensions: '36" × 48"',
    medium: 'Mixed media on canvas',
    artist: 'Marcus Rivera',
    alt: 'Urban landscape artwork showcasing city architecture',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'color-theory',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
    ],
    title: 'Color Theory',
    location: 'Paris Museum',
    date: '2023',
    description: 'An experimental piece that challenges traditional color relationships, creating unexpected harmonies and visual tensions.',
    dimensions: '40" × 40"',
    medium: 'Acrylic on canvas',
    artist: 'Sophie Laurent',
    alt: 'Vibrant artwork demonstrating color theory principles',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'geometric-dreams',
    images: [
      'https://images.unsplash.com/photo-1489792595298-90f287c4197d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1576430321818-7eb0a95038e3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542063648-77d2cc683499?auto=format&fit=crop&q=80&w=800',
    ],
    title: 'Geometric Dreams',
    location: 'Tokyo Arts',
    date: '2024',
    description: 'A meditation on form and space, where geometric patterns create a dreamlike narrative of mathematical precision and artistic freedom.',
    dimensions: '30" × 40"',
    medium: 'Digital print on aluminum',
    artist: 'Yuki Tanaka',
    alt: 'Geometric patterns creating an abstract dreamscape',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'light-study',
    images: [
      'https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1729173078273-3ee243b9273b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1729107722504-1b129b03cb19?auto=format&fit=crop&q=80&w=800',
    ],
    title: 'Light Study',
    location: 'Berlin Gallery',
    date: '2023',
    description: 'An exploration of light and shadow, capturing the ethereal quality of natural illumination in abstract form.',
    dimensions: '72" × 48"',
    medium: 'Oil and metallic leaf on linen',
    artist: 'Hans Mueller',
    alt: 'Study of light and shadow in contemporary art',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 'modern-composition',
    images: [
      'https://images.unsplash.com/photo-1711100254279-0d6e1460ac36?auto=format&fit=crop&q=80&w=800',
    ],
    title: 'Modern Composition',
    location: 'Milan Space',
    date: '2024',
    description: 'A contemporary interpretation of classical composition principles, blending traditional techniques with modern sensibilities.',
    dimensions: '36" × 36"',
    medium: 'Acrylic and gold leaf on panel',
    artist: 'Isabella Romano',
    alt: 'Contemporary composition exploring modern art themes',
    span: 'col-span-1 row-span-1',
  },
];