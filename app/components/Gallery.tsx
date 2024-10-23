'use client';

import { GalleryItem } from './GalleryItem';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Instagram } from 'lucide-react';
import { artworks } from '../config/artworks';

export function Gallery() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen text-white">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-24"
        >
          <header>
            <p className="text-zinc-300 text-md text-center leading-relaxed mb-6 mt-24">
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
                  className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors text-sm mt-10"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  @the.rarehaus
                </a>
            </div>
          </header>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] relative" role="list">
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className={artwork.span}>
              <GalleryItem artwork={artwork} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}