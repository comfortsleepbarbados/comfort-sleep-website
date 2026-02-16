import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comfort Sleep - Premium Mattresses & Sleep Solutions",
  description: "Experience the perfect night's sleep with Comfort Sleep premium mattresses and sleep products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
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
