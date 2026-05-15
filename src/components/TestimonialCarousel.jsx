'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from './LanguageProvider';
import AnimatedSection from './AnimatedSection';

const defaultTestimonials = [
  { id: 1, name: 'Rahim Uddin', name_bn: 'রহিম উদ্দিন', text_en: 'Excellent service! Got my CV and job application done perfectly. Very professional and fast work.', text_bn: 'চমৎকার সেবা! আমার সিভি এবং চাকরির আবেদন নিখুঁতভাবে করেছে।', rating: 5 },
  { id: 2, name: 'Fatema Khatun', name_bn: 'ফাতেমা খাতুন', text_en: 'Best digital service point in our area. The printing quality is amazing and prices are very fair.', text_bn: 'আমাদের এলাকায় সেরা ডিজিটাল সার্ভিস পয়েন্ট।', rating: 5 },
  { id: 3, name: 'Kamal Hossain', name_bn: 'কামাল হোসাইন', text_en: 'They helped me with my Chuktinama perfectly. Very knowledgeable and trustworthy service.', text_bn: 'আমার চুক্তিনামা নিখুঁতভাবে করে দিয়েছে।', rating: 5 },
];

export default function TestimonialCarousel({ testimonials: prop }) {
  const testimonials = prop?.length ? prop : defaultTestimonials;
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);
  const timer = useRef(null);
  const next = useCallback(() => setCurrent(p => (p + 1) % testimonials.length), [testimonials.length]);
  const prev = useCallback(() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length), [testimonials.length]);

  useEffect(() => {
    if (!auto) return;
    timer.current = setInterval(next, 5000);
    return () => clearInterval(timer.current);
  }, [auto, next]);

  const manual = (fn) => { setAuto(false); fn(); setTimeout(() => setAuto(true), 10000); };

  return (
    <section id="testimonials" className="relative z-10 py-24 lg:py-32" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-[900px] mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative text-center py-16" onMouseEnter={() => setAuto(false)} onMouseLeave={() => setAuto(true)}>
            <div className="flex justify-center mb-8">
              <FaQuoteLeft size={48} style={{ color: 'rgba(212,98,43,0.12)' }} />
            </div>
            <p className="text-[1.15rem] sm:text-[1.35rem] leading-[2] mb-10 max-w-[700px] mx-auto" style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              &ldquo;{lang === 'bn' ? testimonials[current]?.text_bn : testimonials[current]?.text_en}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
                style={{ background: 'var(--bg4)', color: 'var(--text)', border: '2px solid var(--border)' }}>
                {(testimonials[current]?.name || 'U')[0]}
              </div>
              <div className="text-center">
                <h4 className="text-[.95rem] font-bold" style={{ color: 'var(--text)' }}>
                  {lang === 'bn' ? testimonials[current]?.name_bn : testimonials[current]?.name}
                </h4>
                <p className="text-[.7rem] tracking-[2px] uppercase font-semibold mt-1" style={{ color: 'var(--accent)' }}>
                  {t.testimonials_client || 'VALUED CLIENT'}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-1 mt-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} style={{ color: i < (testimonials[current]?.rating || 5) ? 'var(--accent)' : 'rgba(255,255,255,0.1)' }} />
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-10">
              <button onClick={() => manual(prev)} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] cursor-pointer transition-all"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'transparent' }} aria-label="Previous">
                <FaChevronLeft size={12} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => manual(() => setCurrent(i))}
                    className="w-2 h-2 rounded-full cursor-pointer border-none transition-all"
                    style={{ background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.1)', transform: i === current ? 'scale(1.4)' : 'scale(1)' }}
                    aria-label={`Testimonial ${i + 1}`} />
                ))}
              </div>
              <button onClick={() => manual(next)} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] cursor-pointer transition-all"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'transparent' }} aria-label="Next">
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
