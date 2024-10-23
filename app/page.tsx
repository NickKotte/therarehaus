import type { Metadata } from 'next';
import { Gallery } from "./components/Gallery";

export const metadata: Metadata = {
  title: 'Gallery | Contemporary Art & Installations',
  description: 'Explore our curated collection of contemporary art, murals, and installations. Each piece tells a unique story of creativity and innovation.',
};

export default function Home() {
  return (
    <article>
      <Gallery />
    </article>
  );
}