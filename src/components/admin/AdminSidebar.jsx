'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { FaTachometerAlt, FaTools, FaBoxOpen, FaProjectDiagram, FaChartLine, FaEnvelopeOpenText, FaCog, FaSignOutAlt } from 'react-icons/fa';

const links = [
  { href: '/admin', label: 'Dashboard', icon: <FaTachometerAlt /> },
  { href: '/admin/services', label: 'Services', icon: <FaTools /> },
  { href: '/admin/store', label: 'Store', icon: <FaBoxOpen /> },
  { href: '/admin/projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { href: '/admin/skills', label: 'Skills', icon: <FaChartLine /> },
  { href: '/admin/messages', label: 'Messages', icon: <FaEnvelopeOpenText /> },
  { href: '/admin/settings', label: 'Settings', icon: <FaCog /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <aside className="w-64 min-h-screen border-r p-6 flex flex-col flex-shrink-0" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
      <h2 className="text-xl font-black mb-10" style={{ color: 'var(--accent)' }}>
        Admin Panel
      </h2>

      <nav className="flex-1 flex flex-col gap-1">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`admin-sidebar-link ${pathname === link.href ? 'active' : ''}`}
            style={{ color: pathname === link.href ? 'var(--accent)' : 'var(--muted)' }}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)' }}>
        <Link
          href="/"
          className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
          style={{ color: 'var(--muted)' }}
        >
          ← Back to Site
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-[#e17055] bg-transparent border-none cursor-pointer text-left"
          style={{ color: 'var(--muted)' }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
}
