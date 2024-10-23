import type { Metadata } from 'next';
import { Shop } from "../components/Shop";

export const metadata: Metadata = {
  title: 'Shop | Exclusive Art & Design Pieces',
  description: 'Purchase exclusive art pieces, limited editions, and custom designs. Find unique pieces that elevate your space.',
};

export default function ShopPage() {
  return (
    <article>
      <Shop />
    </article>
  );
}