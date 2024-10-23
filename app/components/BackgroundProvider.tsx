'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const backgroundClasses = {
  '/': 'bg-gradient-to-br from-zinc-900/95 via-zinc-900/98 to-red-900/95',
  '/shop': 'bg-gradient-to-br from-slate-900/95 via-slate-900/98 to-slate-800/95',
  '/contact': 'bg-gradient-to-br from-zinc-900/95 via-zinc-900/98 to-green-900/95',
};

export function BackgroundProvider() {
  const pathname = usePathname();
  const [bgClass, setBgClass] = useState(backgroundClasses[pathname as keyof typeof backgroundClasses]);

  useEffect(() => {
    const newBgClass = backgroundClasses[pathname as keyof typeof backgroundClasses];
    document.body.className = `${document.body.className.replace(/bg-gradient-to-br\s+from-[^\s]+\s+via-[^\s]+\s+to-[^\s]+/, '')} ${newBgClass}`;
    setBgClass(newBgClass);
  }, [pathname]);

  return null;
}