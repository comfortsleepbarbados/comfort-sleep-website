import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import NavigationClient from '@/components/NavigationClient';
import FooterClient from '@/components/FooterClient';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'Comfort Sleep Barbados | Premium Hospitality Mattresses',
    template: '%s | Comfort Sleep Barbados',
  },
  description: 'Caribbean\'s premier supplier of climate-engineered hospitality mattresses. EPA & ISO certified, 7-year warranty, trusted by Marriott and luxury resorts.',
  keywords: ['hospitality mattresses', 'Caribbean mattresses', 'hotel mattresses', 'Barbados', 'climate-engineered', 'EPA certified', 'ISO 9001'],
  openGraph: {
    title: 'Comfort Sleep Barbados | Premium Hospitality Mattresses',
    description: 'Caribbean\'s premier supplier of climate-engineered hospitality mattresses',
    type: 'website',
    locale: 'en_US',
    siteName: 'Comfort Sleep Barbados',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <div className="min-h-screen bg-white">
          <NavigationClient />
          <main>{children}</main>
          <FooterClient />
        </div>
        <Script id="zoho-salesiq-init" strategy="lazyOnload">
          {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq7b12bf2645f0015959a7277b6a516250bad82253681eace08e47bcc756236f2e"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
