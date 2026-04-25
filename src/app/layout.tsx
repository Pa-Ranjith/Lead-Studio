import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});


export const metadata: Metadata = {
  title: "B2B Lead Generation Agency | Qualified Leads in 30 Days | Leads Studio",
  description: "Get qualified B2B leads in 30 days using proven outbound systems. No fluff, only revenue-focused lead generation. Book a free strategy call.",
  metadataBase: new URL("https://leads-studio.netlify.app"),
  alternates: {
    canonical: "/",
  },
  robots: "index, follow",
  openGraph: {
    title: "B2B Lead Generation Agency | Qualified Leads in 30 Days | Leads Studio",
    description: "Get qualified B2B leads in 30 days using proven outbound systems. No fluff, only revenue-focused lead generation. Book a free strategy call.",
    url: "https://leads-studio.netlify.app",
    siteName: "Lead Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation Agency | Qualified Leads in 30 Days | Leads Studio",
    description: "Get qualified B2B leads in 30 days using proven outbound systems. No fluff, only revenue-focused lead generation. Book a free strategy call.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`, // Replace with actual GTM ID
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lead Studio",
              "url": "https://leads-studio.netlify.app",
              "logo": "https://leads-studio.netlify.app/logo.png",
              "description": "B2B Lead Generation Agency providing qualified leads in 30 days.",
              "sameAs": [
                "https://www.linkedin.com/company/lead-studio", // Placeholder
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${syne.variable} ${mono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
