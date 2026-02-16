'use client';

import { useEffect } from 'react';

export default function ZohoChat() {
  useEffect(() => {
    // Initialize Zoho SalesIQ
    (window as any).$zoho = (window as any).$zoho || {};
    (window as any).$zoho.salesiq = (window as any).$zoho.salesiq || {
      ready: function() {}
    };

    // Load the Zoho SalesIQ widget script
    const script = document.createElement('script');
    script.id = 'zsiqscript';
    script.src = 'https://salesiq.zohopublic.com/widget?wc=siq7b12bf2645f0015959a7277b6a516250bad82253681eace08e47bcc756236f2e';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts
      const existingScript = document.getElementById('zsiqscript');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
