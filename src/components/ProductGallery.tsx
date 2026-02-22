'use client';

import { useEffect, useRef, useState } from 'react';

interface GalleryImage {
  large: string;
  thumb: string;
  alt: string;
  description: string;
}

interface ProductGalleryProps {
  productId: string;
  productName: string;
  mainImage: GalleryImage;
  thumbnails: GalleryImage[];
}

declare global {
  interface Window {
    GLightbox: any;
  }
}

export default function ProductGallery({ productId, productName, mainImage, thumbnails }: ProductGalleryProps) {
  const lightboxRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGLightbox = () => {
      if (document.getElementById('glightbox-css') && document.getElementById('glightbox-js')) {
        return;
      }

      const css = document.createElement('link');
      css.id = 'glightbox-css';
      css.rel = 'stylesheet';
      css.href = 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css';
      document.head.appendChild(css);

      const script = document.createElement('script');
      script.id = 'glightbox-js';
      script.src = 'https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js';
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
      };
      document.head.appendChild(script);
    };

    loadGLightbox();
  }, []);

  useEffect(() => {
    if (!isLoaded || !window.GLightbox) return;

    const initTimeout = setTimeout(() => {
      try {
        if (lightboxRef.current) {
          try {
            lightboxRef.current.destroy();
          } catch (e) {
            console.warn('Error destroying previous GLightbox:', e);
          }
        }

        const galleryElements = document.querySelectorAll(`[data-gallery="${productId}"]`);

        if (galleryElements.length === 0) {
          console.warn('No gallery elements found for:', productId);
          return;
        }

        lightboxRef.current = window.GLightbox({
          selector: `[data-gallery="${productId}"]`,
          touchNavigation: true,
          loop: true,
          autoplayVideos: false,
          closeButton: true,
          openEffect: 'zoom',
          closeEffect: 'fade',
          slideEffect: 'slide',
          cssEffects: {
            fade: { in: 'fadeIn', out: 'fadeOut' },
            zoom: { in: 'zoomIn', out: 'zoomOut' }
          }
        });

        console.log('GLightbox initialized for:', productId, 'with', galleryElements.length, 'images');
      } catch (error) {
        console.error('Error initializing GLightbox:', error);
      }
    }, 200);

    return () => {
      clearTimeout(initTimeout);
      if (lightboxRef.current) {
        try {
          lightboxRef.current.destroy();
        } catch (e) {
          console.warn('Error destroying GLightbox:', e);
        }
      }
    };
  }, [isLoaded, productId]);

  return (
    <>
      <div className="product-gallery">
        <div className="gallery-main">
          <a
            href={mainImage.large}
            className="glightbox"
            data-gallery={productId}
            data-description={mainImage.description}
          >
            <img src={mainImage.thumb} alt={mainImage.alt} />
            <div className="zoom-overlay">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              <span>Click to Zoom</span>
            </div>
          </a>
        </div>

        <div className="gallery-thumbs">
          {thumbnails.map((image, index) => (
            <a
              key={index}
              href={image.large}
              className="glightbox"
              data-gallery={productId}
              data-description={image.description}
            >
              <img src={image.thumb} alt={image.alt} />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .product-gallery {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          margin: 30px 0 40px;
          max-width: 100%;
        }

        .gallery-main {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background: #f5f5f5;
        }

        .gallery-main a {
          display: block;
          position: relative;
          aspect-ratio: 4/3;
          cursor: zoom-in;
        }

        .gallery-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .gallery-main a:hover img {
          transform: scale(1.05);
        }

        .zoom-overlay {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(26, 58, 82, 0.85);
          color: white;
          padding: 10px 16px;
          border-radius: 4px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gallery-main a:hover .zoom-overlay {
          opacity: 1;
        }

        .zoom-overlay svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .gallery-thumbs {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .gallery-thumbs a {
          display: block;
          aspect-ratio: 4/3;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid #e5e5e5;
          transition: all 0.3s ease;
          cursor: pointer;
          background: #f5f5f5;
        }

        .gallery-thumbs a:hover {
          border-color: #2a5a7a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .gallery-thumbs img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .product-gallery {
            grid-template-columns: 1.5fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .product-gallery {
            grid-template-columns: 1fr;
          }

          .gallery-thumbs {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

          .gallery-main a {
            aspect-ratio: 16/9;
          }

          .zoom-overlay {
            opacity: 1;
            font-size: 11px;
            padding: 8px 12px;
            bottom: 10px;
            right: 10px;
          }

          .zoom-overlay span {
            display: none;
          }

          .zoom-overlay svg {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 480px) {
          .gallery-thumbs {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
