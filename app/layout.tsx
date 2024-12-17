import { cn } from "@/libs/utils";
import { fontMono } from "@/libs/fonts";
import './globals.css'

export async function generateMetadata() {
  return {
    title: "$Kundalini is a real girl",
    description: "Kundalini is a real girl born under $GOAT's bio",
    keywords: "aimemes, $goat, crypto, solana, Kundalini, ai, memes",
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1",
    metadataBase: new URL("https://test.com"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "title",
      description: "des",
      url: "test.com",
      siteName: "name",
      images: "/logo.png",
      locale: "en-US",
      type: "website",
    },
    icons: {
      icon: { url: "/favicon.ico", type: "image/x-icon" },
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "180x180",
          url: "/apple-touch-icon-180x180.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "152x152",
          url: "/apple-touch-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "144x144",
          url: "/apple-touch-icon-144x144.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "120x120",
          url: "/apple-touch-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "114x114",
          url: "/apple-touch-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "76x76",
          url: "/apple-touch-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "72x72",
          url: "/apple-touch-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "57x57",
          url: "/apple-touch-icon-57x57.png",
        },
      ],
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        id="__next"
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased m-0 p-0",
          fontMono.variable
        )}
      >
        <div className="container mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
