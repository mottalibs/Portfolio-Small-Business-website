import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import LanguageProvider from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';
import Preloader from '@/components/Preloader';

export const metadata = {
  title: 'Mottalib — Portfolio & Charmatha Digital Point',
  description: 'মোত্তালিব — ডিপ্লোমা ইঞ্জিনিয়ারিং শিক্ষার্থী ও চারমাথা ডিজিটাল পয়েন্টের স্বত্বাধিকারী। Print, Photocopy, Job Apply, CV, ID Card ও মুদি সামগ্রী।',
  keywords: 'Charmatha Digital Point, Mottalib, Print, Photocopy, CV, ID Card, Job Apply, মুদি দোকান, চারমাথা',
  authors: [{ name: 'Mottalib' }],
  openGraph: {
    title: 'Mottalib — Portfolio & Charmatha Digital Point',
    description: 'ডিজিটাল সেবা ও দৈনন্দিন পণ্যের বিশ্বস্ত প্রতিষ্ঠান — চারমাথা ডিজিটাল পয়েন্ট।',
    type: 'website',
    locale: 'bn_BD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mottalib — Charmatha Digital Point',
    description: 'ডিজিটাল সেবা ও দৈনন্দিন পণ্যের বিশ্বস্ত প্রতিষ্ঠান।',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0d0d0d" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+Bengali:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Charmatha Digital Point",
              "description": "কম্পিউটার সেবা, প্রিন্ট, ফটোকপি, জব অ্যাপ্লাই, সিভি তৈরি এবং মুদি সামগ্রী।",
              "address": { "@type": "PostalAddress", "addressLocality": "Charmatha", "addressCountry": "BD" },
              "founder": { "@type": "Person", "name": "Mottalib" },
              "openingHours": "Mo-Sa 09:00-21:00",
              "priceRange": "৳",
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Preloader />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloat />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
