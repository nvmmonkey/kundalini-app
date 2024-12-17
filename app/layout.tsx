import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/libs/utils"
import { fontMono, fontSans } from "@/libs/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface PropsGenerateMetadata {
  params: any;
}

export async function generateMetadata({ params }: PropsGenerateMetadata) {
  return {
    title: "title",
    description: "description",
    keywords: "kw",
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1",
    metadataBase: new URL("https://www.pacificwavetel.com"),
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
  children: React.ReactNode
  params: any
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
            id="__next"
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
        {children}
      </body>
    </html>
  );
}