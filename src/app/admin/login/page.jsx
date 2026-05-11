'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { FaEye, FaEyeSlash, FaSignOutAlt } from 'react-icons/fa';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
        setLoading(false);
        return;
      }

      if (data.session) {
        router.push('/admin');
        router.refresh();
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--bg)' }}>
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-black tracking-[4px] mb-2">MOTTALIB</h1>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>Admin Dashboard Login</p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border p-8" style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}>
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--accent)' }}>Sign In</h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{ color: 'var(--muted)' }}>EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-input"
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-[.7rem] tracking-[2px] font-semibold mb-2" style={{ color: 'var(--muted)' }}>PASSWORD</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="form-input pr-12"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ color: 'var(--muted)' }}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-sm font-semibold text-[#e17055] bg-[#e17055]/10 rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-sm font-bold tracking-[2px] border-none cursor-pointer transition-all duration-300 hover:brightness-110 disabled:opacity-60"
              style={{ background: 'var(--accent)', color: '#0d0d0d' }}
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'}
            </button>
          </form>

          <a
            href="/"
            className="block text-center text-sm mt-6 transition-colors duration-300 hover:text-[var(--accent)]"
            style={{ color: 'var(--muted)' }}
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
}
