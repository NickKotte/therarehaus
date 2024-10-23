'use client';

import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { DetailLayout } from './DetailLayout';
import type { Artwork } from '@/app/config/artworks';

interface ArtworkDetailsProps {
  artwork: Artwork;
}

export function ArtworkDetails({ artwork }: ArtworkDetailsProps) {
  const router = useRouter();

  return (
    <DetailLayout
      images={artwork.images}
      backLink="/"
      backText="Back to Gallery"
    >
      <h1 className="text-2xl font-display tracking-wide text-white">{artwork.title}</h1>
      
      <div className="flex items-center gap-2 text-zinc-300 text-sm">
        <MapPin className="w-4 h-4" aria-hidden="true" />
        <span>{artwork.location}</span>
      </div>

      <p className="text-md text-zinc-200">{artwork.description}</p>

      <div className="border-t border-white/10 pt-6 mt-8">
        <h2 className="text-md font-semibold mb-4 text-white">Artwork Details</h2>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <dt className="text-zinc-400">Artist</dt>
          <dd className="text-zinc-200">{artwork.artist}</dd>
          
          <dt className="text-zinc-400">Date</dt>
          <dd className="text-zinc-200">{artwork.date}</dd>
          
          <dt className="text-zinc-400">Medium</dt>
          <dd className="text-zinc-200">{artwork.medium}</dd>
          
          <dt className="text-zinc-400">Dimensions</dt>
          <dd className="text-zinc-200">{artwork.dimensions}</dd>
        </dl>
      </div>

      <Button
        size="lg"
        className="w-full bg-white text-black hover:bg-white/90"
        onClick={() => router.push('/contact')}
      >
        Inquire About This Piece
      </Button>
    </DetailLayout>
  );
}