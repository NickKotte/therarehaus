import type { Metadata } from 'next';
import { ProductDetails } from "@/app/components/ProductDetails";
import { products } from "@/app/config/products";
import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find(p => p.id === params.productId);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} | The Rare Haus Shop`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.id === params.productId);
  
  if (!product) {
    notFound();
  }

  return (
    <article className="min-h-screen text-black">
      <ProductDetails product={product} />
    </article>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}