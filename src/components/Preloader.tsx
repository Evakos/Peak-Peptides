import { useEffect, useState } from 'react';

// Fake preloader - purely cosmetic, not tied to real asset loading
export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const revealTimer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(revealTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = '';
      const removeTimer = setTimeout(() => setShowPreloader(false), 500);
      return () => clearTimeout(removeTimer);
    }
  }, [isLoading]);

  if (!showPreloader) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img src="/logo.svg" alt="Peak Peptides" className="w-16 h-16 animate-pulse" />
    </div>
  );
}
