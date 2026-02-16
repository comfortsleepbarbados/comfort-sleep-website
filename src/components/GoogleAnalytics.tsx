'use client';

import { useEffect } from 'react';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S15R873GDW';
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    script.onload = () => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-S15R873GDW');
    };

    return () => {
      // Cleanup: remove the script when component unmounts
      const existingScript = document.querySelector('script[src*="googletagmanager.com/gtag"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
