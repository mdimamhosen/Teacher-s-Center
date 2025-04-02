import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teacher's Center",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Teacher's Center is a platform for teachers to share resources and connect with each other.",
  keywords: [
    "teachers",
    "resources",
    "community",
    "education",
    "sharing",
    "collaboration",
    "professional development",
    "teaching",
    "learning",
    "classroom",
    "students",
    "curriculum",
    "lesson plans",
    "assessment",
    "instructional strategies",
    "technology",
  ],
  authors: [
    {
      name: "Teacher's Center",
      url: "https://teacherscenter.com",
    },
  ],
  creator: "Teacher's Center",
  publisher: "Teacher's Center",
  openGraph: {
    title: "Teacher's Center",
    description:
      "Teacher's Center is a platform for teachers to share resources and connect with each other.",
    url: "https://teacherscenter.com",
    siteName: "Teacher's Center",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Teacher's Center",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teacher's Center",
    description:
      "Teacher's Center is a platform for teachers to share resources and connect with each other.",
    images: [
      {
        url: "/apple-touch-icon.png",
        alt: "Teacher's Center",
      },
    ],
    creator: "@teacherscenter",
    site: "@teacherscenter",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    notranslate: false,
    unavailable_after: "2023-10-01T00:00:00Z",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Teacher's Center",
    statusBarStyle: "default",
    startupImage: [
      "/apple-touch-icon.png",
      "/apple-touch-icon-120x120.png",
      "/apple-touch-icon-152x152.png",
      "/apple-touch-icon-167x167.png",
      "/apple-touch-icon-180x180.png",
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google-site-verification=your-google-verification-code",
  },
  alternates: {
    canonical: "https://teacherscenter.com",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
      "fr-FR": "/fr",
      "de-DE": "/de",
      "zh-CN": "/zh",
      "ja-JP": "/ja",
    },
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/atom.xml",
      "application/json": "/data.json",
      "application/ld+json": "/schema.json",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
