'use client';

import { GridItem } from './GridItem';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Instagram } from 'lucide-react';
import { artworks } from '../config/artworks';

export function Gallery() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12 md:mb-24"
        >
          <header>
            <p className="text-zinc-300 text-sm md:text-md text-center leading-relaxed mb-6 mt-12 md:mt-24 px-4">
              Our work is designed to transform spaces into immersive, visually compelling experiences to tell your story. <b>We believe that every space has a canvas for creative and meaningful expression.</b> 
            </p>
            <div className="mx-auto w-full text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/contact')}
                className="text-xs bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-zinc-100 hover:text-green-300"
                aria-label="Schedule a consultation"
              >
                Book a Consultation
              </Button>
              
              <a
                href="https://instagram.com/the.rarehaus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm mt-10"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                @the.rarehaus
              </a>
            </div>
          </header>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px] relative" role="list">
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className={`${artwork.span.replace('col-span-', 'sm:col-span-')}`}>
              <GridItem
                item={{
                  id: artwork.id,
                  images: artwork.images,
                  title: artwork.title,
                  location: artwork.location,
                  alt: artwork.alt,
                }}
                index={index}
                href={`/gallery/${artwork.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}