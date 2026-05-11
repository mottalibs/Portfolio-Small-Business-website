-- =============================================
-- Charmatha Digital Point — Supabase Migration
-- =============================================
-- Run this in your Supabase SQL Editor:
-- https://supabase.com → Your Project → SQL Editor → New Query

-- ===== SERVICES TABLE =====
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  title_bn TEXT NOT NULL,
  desc_en TEXT,
  desc_bn TEXT,
  icon TEXT DEFAULT 'FaPrint',
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===== STORE ITEMS TABLE =====
CREATE TABLE IF NOT EXISTS store_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  desc_en TEXT,
  desc_bn TEXT,
  icon TEXT DEFAULT 'FaShoppingBasket',
  color TEXT DEFAULT '#55efc4',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===== PROJECTS TABLE =====
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  desc_en TEXT,
  desc_bn TEXT,
  icon TEXT DEFAULT 'FaRocket',
  status TEXT DEFAULT 'current' CHECK (status IN ('current', 'web', 'coming_soon')),
  tags TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===== SKILLS TABLE =====
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  desc_en TEXT,
  desc_bn TEXT,
  icon TEXT DEFAULT 'FaCode',
  color TEXT DEFAULT '#6c5ce7',
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===== MESSAGES TABLE =====
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ===== SITE CONFIG TABLE =====
CREATE TABLE IF NOT EXISTS site_config (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ===== SEED: DEFAULT SERVICES =====
INSERT INTO services (title, title_bn, desc_en, desc_bn, icon, sort_order) VALUES
  ('Print & Photocopy', 'প্রিন্ট ও ফটোকপি', 'Color and B&W printing and photocopying.', 'কালার ও ব্ল্যাক অ্যান্ড হোয়াইট প্রিন্ট ও ফটোকপি।', 'FaPrint', 1),
  ('Job Application', 'চাকরির আবেদন', 'Government and private job online applications.', 'সরকারি ও বেসরকারি চাকরির অনলাইন আবেদন।', 'FaBriefcase', 2),
  ('ID Card & CV Design', 'আইডি কার্ড ও সিভি ডিজাইন', 'Professional CV, ID card and business card.', 'প্রফেশনাল সিভি, আইডি কার্ড এবং বিজনেস কার্ড।', 'FaIdCard', 3),
  ('Compose & Data Entry', 'কম্পোজ ও ডাটা এন্ট্রি', 'Bengali/English typing, form fill-up & compose.', 'বাংলা/ইংরেজি টাইপিং, ফরম ফিলাপ ও কম্পোজ।', 'FaKeyboard', 4),
  ('Chuktinama (চুক্তিনামা)', 'চুক্তিনামা', 'Deeds, agreements and legal documents.', 'দলিল, চুক্তিনামা এবং আইনি ডকুমেন্ট লেখা।', 'FaFileContract', 5),
  ('Scanning & More', 'স্ক্যানিং ও অন্যান্য', 'Document scanning, photo print & email services.', 'ডকুমেন্ট স্ক্যানিং, ফটো প্রিন্ট ও ই-মেইল সেবা।', 'FaQrcode', 6);

-- ===== SEED: DEFAULT SKILLS =====
INSERT INTO skills (title, desc_en, desc_bn, icon, color, sort_order) VALUES
  ('PRINTING & DESIGN', 'Printing, photocopying, photo printing and design.', 'প্রিন্ট, ফটোকপি, ছবি প্রিন্ট এবং ডিজাইন।', 'FaPrint', '#6c5ce7', 1),
  ('COMPUTER OPS', 'All computer-related operations.', 'কম্পিউটার সংক্রান্ত সকল কাজ সম্পাদন।', 'FaLaptopCode', '#00cec9', 2),
  ('DATA ENTRY', 'Bengali and English typing, data entry.', 'বাংলা ও ইংরেজি টাইপিং, ডাটা এন্ট্রি।', 'FaFileAlt', '#e17055', 3),
  ('CV & ID CARD', 'Professional CV and ID card creation.', 'প্রফেশনাল সিভি এবং আইডি কার্ড তৈরি।', 'FaIdCardAlt', '#fdcb6e', 4),
  ('JOB APPLICATION', 'Online job applications completed accurately.', 'অনলাইন চাকরি আবেদন নির্ভুলভাবে সম্পন্ন।', 'FaBriefcase', '#a29bfe', 5),
  ('BUSINESS MGMT', 'Shop management and business operations.', 'দোকান পরিচালনা এবং ব্যবসা ব্যবস্থাপনা।', 'FaStore', '#55efc4', 6);

-- ===== SEED: DEFAULT STORE ITEMS =====
INSERT INTO store_items (name, name_bn, desc_en, desc_bn, icon, color) VALUES
  ('Grocery Items', 'মুদি সামগ্রী', 'Rice, lentils, oil, spices and groceries.', 'চাল, ডাল, তেল, মশলা সহ মুদি মালামাল।', 'FaShoppingBasket', '#55efc4'),
  ('Chocolates & Snacks', 'চকোলেট ও স্ন্যাকস', 'Chocolates, chips and kids food.', 'চকোলেট, চিপস এবং বাচ্চাদের খাবার।', 'FaCandyCane', '#fd79a8'),
  ('Bakery & Cakes', 'বেকারি ও কেক', 'Biscuits, bread, cakes and pastries.', 'বিস্কুট, ব্রেড, কেক এবং পেস্ট্রি।', 'FaBirthdayCake', '#fdcb6e'),
  ('Tea & Paan', 'চা ও পান', 'Hot tea and delicious paan.', 'গরম চা এবং সুস্বাদু পান।', 'FaMugHot', '#e17055');

-- ===== SEED: DEFAULT PROJECTS =====
INSERT INTO projects (title, desc_en, desc_bn, icon, status, tags) VALUES
  ('Charmatha Digital Point', 'Hybrid shop combining computer services and grocery store.', 'কম্পিউটার সেবা ও মুদি দোকানের সমন্বয়ে হাইব্রিড শপ।', 'FaStoreAlt', 'current', ARRAY['Digital', 'Retail', 'Local']),
  ('Portfolio Website', 'Portfolio website built with HTML, CSS, JS.', 'পোর্টফোলিও ওয়েবসাইট — HTML, CSS, JS দিয়ে।', 'FaGlobe', 'web', ARRAY['HTML', 'CSS', 'JS']),
  ('Future Projects', 'New work and projects coming soon.', 'নতুন কাজ এবং প্রজেক্ট শীঘ্রই যুক্ত হবে।', 'FaRocket', 'coming_soon', ARRAY['Stay Tuned']);

-- ===== SEED: DEFAULT SITE CONFIG =====
INSERT INTO site_config (key, value) VALUES
  ('phone', '+880 1XXX-XXXXXX'),
  ('email', 'hello@charmathadigital.com'),
  ('address', 'চারমাথা ডিজিটাল পয়েন্ট, (আপনার এলাকা)'),
  ('whatsapp', '8801XXXXXXXXX'),
  ('facebook', '#'),
  ('instagram', '#'),
  ('github', '#'),
  ('stat_clients', '50'),
  ('stat_services', '10'),
  ('stat_years', '3');

-- ===== ROW LEVEL SECURITY =====
-- Enable RLS on all tables
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE store_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;

-- Public can read active items
CREATE POLICY "Public can read active services" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read active store items" ON store_items FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read active projects" ON projects FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read active skills" ON skills FOR SELECT USING (is_active = true);
CREATE POLICY "Public can read site config" ON site_config FOR SELECT USING (true);

-- Public can insert messages (contact form)
CREATE POLICY "Public can send messages" ON messages FOR INSERT WITH CHECK (true);

-- Authenticated users can do everything
CREATE POLICY "Admins manage services" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage store items" ON store_items FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage projects" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage skills" ON skills FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage messages" ON messages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins manage site config" ON site_config FOR ALL USING (auth.role() = 'authenticated');
