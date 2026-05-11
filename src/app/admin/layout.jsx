import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin — Charmatha Digital Point',
  description: 'Admin Dashboard for Charmatha Digital Point',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({ children }) {
  return children;
}
