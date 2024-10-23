'use client';

import { useState } from 'react';
import { MapPin, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DetailLayout } from './DetailLayout';
import type { Product } from '@/app/config/products';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  return (
    <DetailLayout
      images={[product.image]}
      backLink="/shop"
      backText="Back to Shop"
    >
      <h1 className="text-2xl font-display tracking-wide text-white">{product.title}</h1>
      
      <div className="flex items-center gap-2 text-zinc-300">
        <MapPin className="w-4 h-4" aria-hidden="true" />
        <span>{product.location}</span>
      </div>

      <p className="text-md text-zinc-200">{product.description}</p>

      <div className="text-xl font-display text-white">{product.price}</div>

      <Button
        size="lg"
        className="w-full bg-white text-black hover:bg-white/90"
        onClick={handleAddToCart}
        disabled={isAddingToCart}
      >
        <ShoppingBag className="w-4 h-4 mr-2" aria-hidden="true" />
        {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
      </Button>

      <div className="border-t border-white/10 pt-6 mt-8">
        <h2 className="text-md font-semibold mb-4 text-white">Product Details</h2>
        <ul className="space-y-2 text-zinc-300 text-sm">
          <li>Category: {product.category}</li>
          <li>Location: {product.location}</li>
          <li>Free shipping worldwide</li>
          <li>30-day return policy</li>
        </ul>
      </div>
    </DetailLayout>
  );
}