import type { Metadata } from 'next';
import { ArtworkDetails } from "@/app/components/ArtworkDetails";
import { artworks } from "@/app/config/artworks";
import { notFound } from "next/navigation";

interface Props {
  params: {
    artworkId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artwork = artworks.find(a => a.id === params.artworkId);
  
  if (!artwork) {
    return {
      title: 'Artwork Not Found',
    };
  }

  return {
    title: `${artwork.title} by ${artwork.artist} | The Rare Haus Gallery`,
    description: artwork.description,
    openGraph: {
      title: artwork.title,
      description: artwork.description,
      images: [{ url: artwork.images[0] }],
    },
  };
}

export default function ArtworkPage({ params }: Props) {
  const artwork = artworks.find(a => a.id === params.artworkId);
  
  if (!artwork) {
    notFound();
  }

  return (
    <article>
      <ArtworkDetails artwork={artwork} />
    </article>
  );
}

export async function generateStaticParams() {
  return artworks.map((artwork) => ({
    artworkId: artwork.id,
  }));
}