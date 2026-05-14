'use client';
import { useLanguage } from './LanguageProvider';
import AnimatedSection from './AnimatedSection';
import { FaCheck, FaTimes, FaCrown, FaArrowRight } from 'react-icons/fa';

const pkgs = [
  {
    id: 'basic', name_en: 'Basic', name_bn: 'বেসিক', price: '৳50',
    period_en: 'starting from', period_bn: 'থেকে শুরু',
    desc_en: 'Essential digital services for everyday needs.',
    desc_bn: 'দৈনন্দিন প্রয়োজনে অপরিহার্য ডিজিটাল সেবা।',
    feat_en: ['B&W Print (per page)', 'Photocopy', 'Simple Scanning', 'Form Fill-up', 'Basic Compose'],
    feat_bn: ['ব্ল্যাক & হোয়াইট প্রিন্ট', 'ফটোকপি', 'সাধারণ স্ক্যানিং', 'ফরম ফিলাপ', 'সাধারণ কম্পোজ'],
    excl_en: ['CV Design', 'Job Application', 'Chuktinama'],
    excl_bn: ['সিভি ডিজাইন', 'চাকরির আবেদন', 'চুক্তিনামা'],
    popular: false,
  },
  {
    id: 'standard', name_en: 'Standard', name_bn: 'স্ট্যান্ডার্ড', price: '৳200',
    period_en: 'starting from', period_bn: 'থেকে শুরু',
    desc_en: 'Complete digital services for professionals.',
    desc_bn: 'পেশাদারদের জন্য সম্পূর্ণ ডিজিটাল সেবা।',
    feat_en: ['Color Print', 'CV Design', 'ID Card Design', 'Job Application', 'Data Entry', 'Photo Print'],
    feat_bn: ['কালার প্রিন্ট', 'সিভি ডিজাইন', 'আইডি কার্ড', 'চাকরির আবেদন', 'ডাটা এন্ট্রি', 'ফটো প্রিন্ট'],
    excl_en: ['Chuktinama'], excl_bn: ['চুক্তিনামা'],
    popular: true,
  },
  {
    id: 'premium', name_en: 'Premium', name_bn: 'প্রিমিয়াম', price: '৳500',
    period_en: 'starting from', period_bn: 'থেকে শুরু',
    desc_en: 'Full-service package with legal documents.',
    desc_bn: 'আইনি নথিসহ সম্পূর্ণ সেবা প্যাকেজ।',
    feat_en: ['All Standard Features', 'Chuktinama / Deeds', 'Business Cards', 'Legal Documents', 'Priority Service', 'Consultation'],
    feat_bn: ['সকল স্ট্যান্ডার্ড সুবিধা', 'চুক্তিনামা / দলিল', 'বিজনেস কার্ড', 'আইনি ডকুমেন্ট', 'অগ্রাধিকার সেবা', 'পরামর্শ'],
    excl_en: [], excl_bn: [],
    popular: false,
  },
];

export default function PricingCards() {
  const { lang, t } = useLanguage();
  return (
    <section id="pricing" className="relative z-10 py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <AnimatedSection><div className="sec-label mb-5 text-center">{t.sec_pricing || 'PRICING'}</div></AnimatedSection>
        <AnimatedSection><h2 className="sec-title text-center mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>{t.pricing_title_1 || 'Our'} <span className="gradient-text">{t.pricing_title_2 || 'Packages'}</span></h2></AnimatedSection>
        <AnimatedSection><p className="text-center max-w-[480px] mx-auto mb-16 text-[.92rem] leading-[1.85]" style={{ color: 'var(--muted)' }}>{t.pricing_sub || 'Transparent pricing. Choose the package that fits your needs.'}</p></AnimatedSection>
        <AnimatedSection delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pkgs.map(p => (
              <div key={p.id} className={`pricing-card relative rounded-2xl border p-8 flex flex-col transition-all duration-500 hover:-translate-y-2`}
                style={{ background: p.popular ? 'linear-gradient(135deg, rgba(200,164,85,0.08), rgba(200,164,85,0.02))' : 'var(--glass)', borderColor: p.popular ? 'rgba(200,164,85,0.3)' : 'var(--glass-border)', boxShadow: p.popular ? '0 20px 60px rgba(200,164,85,0.1)' : 'none' }}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[.6rem] font-bold tracking-[2px] uppercase" style={{ background: 'var(--accent)', color: '#0a0a0a' }}><FaCrown size={10} />{t.pricing_popular || 'POPULAR'}</div>}
                <h3 className="text-[.7rem] tracking-[3px] uppercase font-bold mb-3" style={{ color: 'var(--accent)' }}>{lang === 'bn' ? p.name_bn : p.name_en}</h3>
                <div className="flex items-baseline gap-1 mb-2"><span className="text-[2.5rem] font-black text-white">{p.price}</span><span className="text-[.75rem]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? p.period_bn : p.period_en}</span></div>
                <p className="text-[.85rem] mb-8 leading-[1.7]" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? p.desc_bn : p.desc_en}</p>
                <ul className="flex-1 space-y-3 mb-8">
                  {(lang === 'bn' ? p.feat_bn : p.feat_en).map(f => <li key={f} className="flex items-center gap-3 text-[.85rem]"><FaCheck size={10} style={{ color: 'var(--accent)', flexShrink: 0 }} /><span className="text-white">{f}</span></li>)}
                  {(lang === 'bn' ? p.excl_bn : p.excl_en).map(f => <li key={f} className="flex items-center gap-3 text-[.85rem]"><FaTimes size={10} style={{ color: 'rgba(255,255,255,0.15)', flexShrink: 0 }} /><span style={{ color: 'rgba(255,255,255,0.2)' }}>{f}</span></li>)}
                </ul>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl text-[.75rem] font-bold tracking-[2px] uppercase transition-all duration-500 hover:-translate-y-1" style={{ background: p.popular ? 'var(--accent)' : 'transparent', color: p.popular ? '#0a0a0a' : 'var(--text)', border: p.popular ? 'none' : '1px solid var(--border)' }}>
                  {t.pricing_btn || 'GET STARTED'} <FaArrowRight size={10} />
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
