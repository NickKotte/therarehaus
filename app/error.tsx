'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-display tracking-wide text-white">Something went wrong</h1>
        <p className="text-lg text-zinc-300">We apologize for the inconvenience.</p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}