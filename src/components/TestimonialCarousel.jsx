'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from './LanguageProvider';
import AnimatedSection from './AnimatedSection';

const defaultTestimonials = [
  { id: 1, name: 'Rahim Uddin', name_bn: 'রহিম উদ্দিন', text_en: 'Excellent service! Got my CV and job application done perfectly. Very professional and fast work.', text_bn: 'চমৎকার সেবা! আমার সিভি এবং চাকরির আবেদন নিখুঁতভাবে করেছে। খুবই প্রফেশনাল এবং দ্রুত কাজ।', rating: 5 },
  { id: 2, name: 'Fatema Khatun', name_bn: 'ফাতেমা খাতুন', text_en: 'Best digital service point in our area. The printing quality is amazing and prices are very fair.', text_bn: 'আমাদের এলাকায় সেরা ডিজিটাল সার্ভিস পয়েন্ট। প্রিন্টের মান অসাধারণ এবং দাম খুবই ন্যায্য।', rating: 5 },
  { id: 3, name: 'Kamal Hossain', name_bn: 'কামাল হোসাইন', text_en: 'They helped me with my Chuktinama perfectly. Very knowledgeable and trustworthy service.', text_bn: 'আমার চুক্তিনামা নিখুঁতভাবে করে দিয়েছে। খুবই জ্ঞানী এবং বিশ্বস্ত সেবা।', rating: 5 },
  { id: 4, name: 'Nusrat Jahan', name_bn: 'নুসরাত জাহান', text_en: 'Quick and reliable! I always come here for my printing and scanning needs. Highly recommended!', text_bn: 'দ্রুত এবং নির্ভরযোগ্য! আমি সবসময় প্রিন্ট এবং স্ক্যানিংয়ের জন্য এখানে আসি। অত্যন্ত সুপারিশ করি!', rating: 4 },
  { id: 5, name: 'Abdul Majid', name_bn: 'আব্দুল মাজিদ', text_en: 'The ID card design they made for my business looks incredibly professional. Great work!', text_bn: 'আমার ব্যবসার জন্য যে আইডি কার্ড ডিজাইন করেছে তা অবিশ্বাস্যভাবে প্রফেশনাল দেখাচ্ছে। দারুণ কাজ!', rating: 5 },
];

export default function TestimonialCarousel({ testimonials: propTestimonials }) {
  const testimonials = propTestimonials?.length ? propTestimonials : defaultTestimonials;
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying, next]);

  const handleManual = (fn) => {
    setIsAutoPlaying(false);
    fn();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="relative z-10 py-24 lg:py-32" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <AnimatedSection><div className="sec-label mb-5 text-center">{t.sec_testimonials || 'TESTIMONIALS'}</div></AnimatedSection>
        <AnimatedSection><h2 className="sec-title text-center mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>{t.testimonials_title_1 || 'What Our'} <span className="gradient-text">{t.testimonials_title_2 || 'Clients Say'}</span></h2></AnimatedSection>
        <AnimatedSection><p className="text-center max-w-[480px] mx-auto mb-16 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.testimonials_sub || 'Real feedback from our valued customers who trust us with their needs.'}</p></AnimatedSection>

        <AnimatedSection delay={80}>
          <div
            className="relative max-w-[700px] mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 z-10">
              <FaQuoteLeft size={40} style={{ color: 'rgba(200, 164, 85, 0.08)' }} />
            </div>

            {/* Card */}
            <div className="testimonial-card glass-card px-8 py-10 sm:px-12 sm:py-12 text-center relative overflow-hidden">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={16}
                    style={{
                      color: i < (testimonials[current]?.rating || 5) ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                      transition: 'color 0.3s',
                    }}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-[1.05rem] sm:text-[1.15rem] leading-[1.9] mb-8 min-h-[80px]" style={{ color: 'var(--text-secondary)', fontStyle: 'italic', transition: 'opacity 0.5s' }}>
                "{lang === 'bn' ? testimonials[current]?.text_bn : testimonials[current]?.text_en}"
              </p>

              {/* Avatar + Name */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'var(--accent)', color: '#0a0a0a' }}>
                  {(testimonials[current]?.name || 'U')[0]}
                </div>
                <div>
                  <h4 className="text-[.9rem] font-bold text-white">{lang === 'bn' ? testimonials[current]?.name_bn : testimonials[current]?.name}</h4>
                  <p className="text-[.7rem] tracking-[2px] uppercase" style={{ color: 'var(--accent)' }}>{t.testimonials_client || 'VALUED CLIENT'}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => handleManual(prev)}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#0a0a0a] hover:border-[var(--accent)] cursor-pointer"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'transparent' }}
                aria-label="Previous testimonial"
              >
                <FaChevronLeft size={12} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { handleManual(() => setCurrent(i)); }}
                    className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-none"
                    style={{
                      background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                      transform: i === current ? 'scale(1.4)' : 'scale(1)',
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleManual(next)}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#0a0a0a] hover:border-[var(--accent)] cursor-pointer"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'transparent' }}
                aria-label="Next testimonial"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
