"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import type { Artwork } from "../config/artworks";

interface GalleryItemProps {
  artwork: Artwork;
  index: number;
}

export function GalleryItem({ artwork, index }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isCollection = artwork.images.length > 1;

  const fanOutVariants = {
    initial: (i: number) => ({
      rotateZ: 0,
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: artwork.images.length - i,
    }),
    hover: (i: number) => ({
      rotateZ: (i - 1) * -3,
      y: i === 0 ? 0 : -10 * i,
      x: i === 0 ? 0 : -15 * i,
      scale: 1,
      opacity: 1,
      zIndex: artwork.images.length + i,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Link href={`/gallery/${artwork.id}`} className="block w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full h-full group"
        style={{ zIndex: isHovered ? 40 : 1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        role="listitem"
        aria-label={`${artwork.title} - ${artwork.location}`}
      >
        <div className="relative w-full h-full rounded-lg">
          {isCollection ? (
            <div className="absolute inset-0 perspective-1000" style={{ overflow: 'visible' }}>
              {[...artwork.images].reverse().map((image, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 origin-center"
                  custom={i}
                  variants={fanOutVariants}
                  initial="initial"
                  animate={isHovered ? "hover" : "initial"}
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    overflow: 'hidden',
                    borderRadius: '0.5rem',
                  }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={artwork.alt}
                      className="w-full h-full object-cover"
                      loading={index > 2 ? "lazy" : "eager"}
                    />
                    {i === artwork.images.length - 1 && (
                      <>
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                          aria-hidden="true"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-4 text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h2 className="font-display text-lg tracking-wide">{artwork.title}</h2>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" aria-hidden="true" />
                            <span className="text-sm text-white/90 tracking-wider uppercase">
                              {artwork.location}
                            </span>
                          </div>
                          {isCollection && (
                            <motion.span
                              className="text-xs text-white/80 mt-1 block tracking-wider"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: isHovered ? 1 : 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              Collection of {artwork.images.length} images
                            </motion.span>
                          )}
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="relative w-full h-full transform-gpu rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={artwork.images[0]}
                alt={artwork.alt}
                className="w-full h-full object-cover"
                loading={index > 2 ? "lazy" : "eager"}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                aria-hidden="true"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-display text-lg tracking-wide">{artwork.title}</h2>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" aria-hidden="true" />
                  <span className="text-sm text-white/90 tracking-wider uppercase">
                    {artwork.location}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}