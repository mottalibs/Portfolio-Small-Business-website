import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import HomePage from '@/components/HomePage';

// Default fallback data when Supabase is not configured
const defaultServices = [
  { id: '1', title: 'Print & Photocopy', title_bn: 'প্রিন্ট ও ফটোকপি', desc_en: 'Color and B&W printing and photocopying.', desc_bn: 'কালার ও ব্ল্যাক অ্যান্ড হোয়াইট প্রিন্ট ও ফটোকপি।', icon: 'FaPrint' },
  { id: '2', title: 'Job Application', title_bn: 'চাকরির আবেদন', desc_en: 'Government and private job online applications.', desc_bn: 'সরকারি ও বেসরকারি চাকরির অনলাইন আবেদন।', icon: 'FaBriefcase' },
  { id: '3', title: 'ID Card & CV Design', title_bn: 'আইডি কার্ড ও সিভি', desc_en: 'Professional CV, ID card and business card.', desc_bn: 'প্রফেশনাল সিভি, আইডি কার্ড এবং বিজনেস কার্ড।', icon: 'FaIdCard' },
  { id: '4', title: 'Compose & Data Entry', title_bn: 'কম্পোজ ও ডাটা এন্ট্রি', desc_en: 'Bengali/English typing, form fill-up & compose.', desc_bn: 'বাংলা/ইংরেজি টাইপিং, ফরম ফিলাপ ও কম্পোজ।', icon: 'FaKeyboard' },
  { id: '5', title: 'Chuktinama (চুক্তিনামা)', title_bn: 'চুক্তিনামা', desc_en: 'Deeds, agreements and legal documents.', desc_bn: 'দলিল, চুক্তিনামা এবং আইনি ডকুমেন্ট লেখা।', icon: 'FaFileContract' },
  { id: '6', title: 'Scanning & More', title_bn: 'স্ক্যানিং ও অন্যান্য', desc_en: 'Document scanning, photo print & email services.', desc_bn: 'ডকুমেন্ট স্ক্যানিং, ফটো প্রিন্ট ও ই-মেইল সেবা।', icon: 'FaQrcode' },
];

const defaultSkills = [
  { id: '1', title: 'PRINTING & DESIGN', desc_en: 'Printing, photocopying, photo printing and design.', desc_bn: 'প্রিন্ট, ফটোকপি, ছবি প্রিন্ট এবং ডিজাইন।', icon: 'FaPrint', color: '#6c5ce7' },
  { id: '2', title: 'COMPUTER OPS', desc_en: 'All computer-related operations.', desc_bn: 'কম্পিউটার সংক্রান্ত সকল কাজ সম্পাদন।', icon: 'FaLaptopCode', color: '#00cec9' },
  { id: '3', title: 'DATA ENTRY', desc_en: 'Bengali and English typing, data entry.', desc_bn: 'বাংলা ও ইংরেজি টাইপিং, ডাটা এন্ট্রি।', icon: 'FaFileAlt', color: '#e17055' },
  { id: '4', title: 'CV & ID CARD', desc_en: 'Professional CV and ID card creation.', desc_bn: 'প্রফেশনাল সিভি এবং আইডি কার্ড তৈরি।', icon: 'FaIdCardAlt', color: '#fdcb6e' },
  { id: '5', title: 'JOB APPLICATION', desc_en: 'Online job applications completed accurately.', desc_bn: 'অনলাইন চাকরি আবেদন নির্ভুলভাবে সম্পন্ন।', icon: 'FaBriefcase', color: '#a29bfe' },
  { id: '6', title: 'BUSINESS MGMT', desc_en: 'Shop management and business operations.', desc_bn: 'দোকান পরিচালনা এবং ব্যবসা ব্যবস্থাপনা।', icon: 'FaStore', color: '#55efc4' },
];

const defaultStoreItems = [
  { id: '1', name: 'Grocery Items', name_bn: 'মুদি সামগ্রী', desc_en: 'Rice, lentils, oil, spices and groceries.', desc_bn: 'চাল, ডাল, তেল, মশলা সহ মুদি মালামাল।', icon: 'FaShoppingBasket', color: '#55efc4' },
  { id: '2', name: 'Chocolates & Snacks', name_bn: 'চকোলেট ও স্ন্যাকস', desc_en: 'Chocolates, chips and kids food.', desc_bn: 'চকোলেট, চিপস এবং বাচ্চাদের খাবার।', icon: 'FaCandyCane', color: '#fd79a8' },
  { id: '3', name: 'Bakery & Cakes', name_bn: 'বেকারি ও কেক', desc_en: 'Biscuits, bread, cakes and pastries.', desc_bn: 'বিস্কুট, ব্রেড, কেক এবং পেস্ট্রি।', icon: 'FaBirthdayCake', color: '#fdcb6e' },
  { id: '4', name: 'Tea & Paan', name_bn: 'চা ও পান', desc_en: 'Hot tea and delicious paan.', desc_bn: 'গরম চা এবং সুস্বাদু পান।', icon: 'FaMugHot', color: '#e17055' },
];

const defaultProjects = [
  { id: '1', title: 'Charmatha Digital Point', desc_en: 'Hybrid shop combining computer services and grocery store.', desc_bn: 'কম্পিউটার সেবা ও মুদি দোকানের সমন্বয়ে হাইব্রিড শপ।', icon: 'FaStoreAlt', status: 'current', tags: ['Digital', 'Retail', 'Local'] },
  { id: '2', title: 'Portfolio Website', desc_en: 'Portfolio website built with HTML, CSS, JS.', desc_bn: 'পোর্টফোলিও ওয়েবসাইট — HTML, CSS, JS দিয়ে।', icon: 'FaGlobe', status: 'web', tags: ['HTML', 'CSS', 'JS'] },
  { id: '3', title: 'Future Projects', desc_en: 'New work and projects coming soon.', desc_bn: 'নতুন কাজ এবং প্রজেক্ট শীঘ্রই যুক্ত হবে।', icon: 'FaRocket', status: 'coming_soon', tags: ['Stay Tuned'] },
];

const defaultConfig = {
  phone: '+880 1XXX-XXXXXX',
  email: 'hello@charmathadigital.com',
  address: 'চারমাথা ডিজিটাল পয়েন্ট, (আপনার এলাকা)',
  whatsapp: '8801XXXXXXXXX',
  facebook: '#',
  instagram: '#',
  github: '#',
  stat_clients: '50',
  stat_services: '10',
  stat_years: '3',
};

async function getData() {
  if (!isSupabaseConfigured()) {
    return {
      services: defaultServices,
      skills: defaultSkills,
      storeItems: defaultStoreItems,
      projects: defaultProjects,
      config: defaultConfig,
    };
  }

  try {
    const [servicesRes, skillsRes, storeRes, projectsRes, configRes] = await Promise.all([
      supabase.from('services').select('*').eq('is_active', true).order('sort_order'),
      supabase.from('skills').select('*').eq('is_active', true).order('sort_order'),
      supabase.from('store_items').select('*').eq('is_active', true),
      supabase.from('projects').select('*').eq('is_active', true),
      supabase.from('site_config').select('*'),
    ]);

    const configObj = {};
    (configRes.data || []).forEach(c => { configObj[c.key] = c.value; });

    return {
      services: servicesRes.data?.length ? servicesRes.data : defaultServices,
      skills: skillsRes.data?.length ? skillsRes.data : defaultSkills,
      storeItems: storeRes.data?.length ? storeRes.data : defaultStoreItems,
      projects: projectsRes.data?.length ? projectsRes.data : defaultProjects,
      config: Object.keys(configObj).length ? configObj : defaultConfig,
    };
  } catch (err) {
    console.error('Failed to fetch data from Supabase:', err);
    return {
      services: defaultServices,
      skills: defaultSkills,
      storeItems: defaultStoreItems,
      projects: defaultProjects,
      config: defaultConfig,
    };
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const { services, skills, storeItems, projects, config } = await getData();

  return (
    <HomePage
      services={services}
      skills={skills}
      storeItems={storeItems}
      projects={projects}
      config={config}
    />
  );
}
