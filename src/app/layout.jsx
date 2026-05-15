import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import LanguageProvider from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Preloader from '@/components/Preloader';
import ScrollProgress from '@/components/ScrollProgress';

export const metadata = {
  title: 'Mottalib — Tech Entrepreneur | Linux & AI Enthusiast',
  description: 'Mottalib — Tech Entrepreneur, CST Diploma Student, Linux & AI Enthusiast from Sariakandi, Bogura. Building digital solutions at the grassroots level.',
  keywords: 'Mottalib, Tech Entrepreneur, Linux, AI, CST Diploma, Arch Linux, EndeavourOS, Chan Matha Digital Point, Sariakandi, Bogura',
  authors: [{ name: 'Mottalib' }],
  openGraph: {
    title: 'Mottalib — Tech Entrepreneur | Linux & AI Enthusiast',
    description: 'Building digital solutions at the grassroots level. Linux expert, AI automation enthusiast, and hardware troubleshooter.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mottalib — Tech Entrepreneur',
    description: 'Building digital solutions at the grassroots level.',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0D0D0D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mottalib",
              "jobTitle": "Tech Entrepreneur",
              "description": "CST Diploma Student, Linux & AI Enthusiast. Building digital solutions at the grassroots level.",
              "address": { "@type": "PostalAddress", "addressLocality": "Sariakandi, Bogura", "addressCountry": "BD" },
              "knowsAbout": ["Linux", "Artificial Intelligence", "Hardware Troubleshooting", "IT Services"],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Preloader />
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
