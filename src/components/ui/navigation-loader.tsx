'use client';

import { Suspense, useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

function NavigationLoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Stop loading when pathname or searchParams change
  useEffect(() => {
    setIsLoading(false);
    setProgress(100);
    const timer = setTimeout(() => {
      setProgress(0);
    }, 200);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Intercept click events globally to show immediate progress feedback
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.href && target.target !== '_blank') {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(target.href, window.location.href);

        // Only trigger loader if navigating to a new internal page
        if (targetUrl.origin === currentUrl.origin && targetUrl.pathname !== currentUrl.pathname) {
          setIsLoading(true);
          setProgress(30);
        }
      }
    };

    const handleFormSubmit = () => {
      setIsLoading(true);
      setProgress(40);
    };

    window.addEventListener('click', handleAnchorClick);
    window.addEventListener('submit', handleFormSubmit);

    return () => {
      window.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

  // Increment progress smoothly while waiting
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading && progress === 0) return null;

  return (
    <>
      {/* Top Fixed Progress Line */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-slate-200/50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-primary to-emerald-500 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Subtle Instant Loading Indicator Pill */}
      {isLoading && (
        <div className="fixed top-3 left-3 z-[9999] pointer-events-none flex items-center gap-2 bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm animate-in fade-in duration-200">
          <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
          <span>جاري التحميل...</span>
        </div>
      )}
    </>
  );
}

export function GlobalNavigationLoader() {
  return (
    <Suspense fallback={null}>
      <NavigationLoaderContent />
    </Suspense>
  );
}
