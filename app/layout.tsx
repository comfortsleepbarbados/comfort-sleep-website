import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Comfort Sleep Barbados | Caribbean Hospitality Mattresses",
  description: "Premium mattresses engineered for Caribbean hotels. Tariff-free pricing, 2-3 week delivery, and 7-year commercial warranty. Serving 250+ properties across 12 islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
        <Script id="zoho-salesiq-init" strategy="beforeInteractive">
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
