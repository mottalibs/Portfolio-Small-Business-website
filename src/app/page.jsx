import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import HomePage from '@/components/HomePage';

const defaultConfig = {
  phone: '+880 1XXX-XXXXXX',
  email: 'mottalib@example.com',
  address: 'Sariakandi, Bogura, Bangladesh',
  whatsapp: '8801XXXXXXXXX',
  facebook: '#',
  instagram: '#',
  github: '#',
};

async function getData() {
  if (!isSupabaseConfigured()) {
    return { config: defaultConfig };
  }

  try {
    const configRes = await supabase.from('site_config').select('*');
    const configObj = {};
    (configRes.data || []).forEach(c => { configObj[c.key] = c.value; });

    return {
      config: Object.keys(configObj).length ? configObj : defaultConfig,
    };
  } catch (err) {
    console.error('Failed to fetch data from Supabase:', err);
    return { config: defaultConfig };
  }
}

export const revalidate = 60;

export default async function Home() {
  const { config } = await getData();

  return <HomePage config={config} />;
}
