'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useState, useCallback } from 'react';
import Link from 'next/link';

export interface GridItemData {
  id: string;
  images: string[];
  title: string;
  location: string;
  subtitle?: string;
  span?: string;
  alt?: string;
}

interface GridItemProps {
  item: GridItemData;
  index: number;
  href: string;
  showOverlayOnScroll?: boolean;
}

const fanOutVariants = {
  initial: (i: number) => ({
    rotateZ: 0,
    y: 0,
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 10 - i,
  }),
  active: (i: number) => ({
    rotateZ: (i - 1) * -3,
    y: i === 0 ? 0 : -10 * i,
    x: i === 0 ? 0 : -15 * i,
    scale: 1,
    opacity: 1,
    zIndex: 10 + i,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  }),
};

export function GridItem({ item, index, href, showOverlayOnScroll = false }: GridItemProps) {
  const [isActive, setIsActive] = useState(false);
  const isCollection = item.images.length > 1;

  const handleInteractionStart = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setIsActive(false);
  }, []);

  const overlayAnimation = showOverlayOnScroll ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: false, amount: 0.8 },
    transition: { duration: 0.5 }
  } : {
    initial: { opacity: 0 },
    animate: { opacity: isActive ? 1 : 0 },
    transition: { duration: 0.3 }
  };

  const contentAnimation = showOverlayOnScroll ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.8 },
    transition: { duration: 0.5, delay: 0.2 }
  } : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 },
    transition: { duration: 0.3 }
  };

  return (
    <Link href={href} className="block w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
        className="relative w-full h-full group"
        style={{ zIndex: isActive ? 40 : 1 }}
        onHoverStart={handleInteractionStart}
        onHoverEnd={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onTouchCancel={handleInteractionEnd}
      >
        <div className="relative w-full h-full rounded-lg">
          {isCollection ? (
            <div className="absolute inset-0 perspective-1000" style={{ overflow: 'visible' }}>
              {[...item.images].reverse().map((image, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 origin-center"
                  custom={i}
                  variants={fanOutVariants}
                  initial="initial"
                  animate={isActive ? "active" : "initial"}
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
                      alt={item.alt || item.title}
                      className="w-full h-full object-cover"
                      loading={index > 2 ? "lazy" : "eager"}
                      draggable={false}
                    />
                    {i === item.images.length - 1 && (
                      <>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                          {...overlayAnimation}
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-4 text-white"
                          {...contentAnimation}
                        >
                          <h2 className="font-display text-lg tracking-wide">{item.title}</h2>
                          {item.subtitle && (
                            <p className="text-sm text-white/90">{item.subtitle}</p>
                          )}
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" aria-hidden="true" />
                            <span className="text-sm text-white/90 tracking-wider uppercase">
                              {item.location}
                            </span>
                          </div>
                          {isCollection && (
                            <motion.span
                              className="text-xs text-white/80 mt-1 block tracking-wider"
                              animate={{ opacity: isActive ? 1 : 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              Collection of {item.images.length} images
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
              whileTap={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.images[0]}
                alt={item.alt || item.title}
                className="w-full h-full object-cover"
                loading={index > 2 ? "lazy" : "eager"}
                draggable={false}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                {...overlayAnimation}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                {...contentAnimation}
              >
                <h2 className="font-display text-lg tracking-wide">{item.title}</h2>
                {item.subtitle && (
                  <p className="text-sm text-white/90">{item.subtitle}</p>
                )}
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" aria-hidden="true" />
                  <span className="text-sm text-white/90 tracking-wider uppercase">
                    {item.location}
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