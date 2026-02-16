import type { Metadata } from 'next';
import './globals.css';
import NavigationClient from '@/components/NavigationClient';
import FooterClient from '@/components/FooterClient';
import StructuredData from '@/components/StructuredData';
import ZohoChat from '@/components/ZohoChat';
import GoogleAnalytics from '@/components/GoogleAnalytics';

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
        <GoogleAnalytics />
        <StructuredData />
        <div className="min-h-screen bg-white">
          <NavigationClient />
          <main>{children}</main>
          <FooterClient />
        </div>
        <ZohoChat />
      </body>
    </html>
  );
}
