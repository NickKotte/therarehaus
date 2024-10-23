import { MetadataRoute } from 'next';
import { artworks } from './config/artworks';
import { products } from './config/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://therarehaus.com';

  // Base routes
  const routes = [
    '',
    '/gallery',
    '/shop',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Artwork routes
  const artworkRoutes = artworks.map((artwork) => ({
    url: `${baseUrl}/gallery/${artwork.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...artworkRoutes, ...productRoutes];
}