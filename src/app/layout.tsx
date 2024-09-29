import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import { BackgroundLines } from "@/components/ui/background-lines";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'StableImg - Free AI Image Generator',
  description: 'Generate amazing images using AI with Stable Image',
  keywords: ['AI', 'image generation', 'stable diffusion', 'art', 'creative'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name or Company',
  publisher: 'Your Name or Company',
  openGraph: {
    title: 'StableImg - AI Image Generator',
    description: 'Create stunning images with AI technology',
    url: 'https://stableimg.yourdomain.com',
    siteName: 'StableImg',
    images: [
      {
        url: 'https://stableimg.yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StableImg - Free AI Image Generator',
    description: 'Create stunning images with AI technology',
    creator: '@yourtwitterhandle',
    images: ['https://stableimg.yourdomain.com/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundLines>
            <Header />
            {children}
          </BackgroundLines>
        </ThemeProvider>
      </body>
    </html>
  );
}
