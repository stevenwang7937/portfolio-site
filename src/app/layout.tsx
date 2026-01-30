import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollToTop } from "@/components/globalcomponents";
import Preloader from "@/components/preloader";
import Script from "next/script";


// Noe Display font (for display/headings)
const noeDisplay = localFont({
  src: [
    {
      path: "../noe-display-fonts/NoeDisplay.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../noe-display-fonts/NoeDisplay-RegularItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../noe-display-fonts/fonnts.com-NoeDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../noe-display-fonts/Noe_Display_Medium_Italic.woff.woff",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["serif"],
});

// Satoshi font (for body text)
const satoshi = localFont({
  src: [
    {
      path: "../satoshi-fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../satoshi-fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../satoshi-fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../satoshi-fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../satoshi-fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../satoshi-fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../satoshi-fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../satoshi-fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../satoshi-fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../satoshi-fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Steven's UX Portfolio",
  description: "Steven is a full-stack product designer and web developer based in Vancouver, Canada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${noeDisplay.variable} ${satoshi.variable} antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RDJ8HNRG2G"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RDJ8HNRG2G');
            `,
          }}
        />

        {/* DeepRank24 */}
        <Script
          strategy="afterInteractive"
          src="https://app.deeprank24.com/sdk/deeprank24-auto-optimize.js"
          data-deeprank-token="1193d7ad834f763321a1a7201ff99e14"
          data-deeprank-site="https://stevenwangux.com/"
          data-deeprank-connection="cms_1170863fa7538ef2"
          data-deeprank-crawl="auto"
          data-deeprank-crawl-limit="80"
          data-deeprank-crawl-version="v3"
        />
        <Preloader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}





