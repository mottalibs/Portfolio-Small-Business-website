'use client';
import { useEffect, useRef } from 'react';
import { FaTimes, FaCheck, FaArrowRight } from 'react-icons/fa';
import { DynamicIcon } from '@/lib/icons';

export default function DetailModal({ open, onClose, data, type = 'service' }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open || !data) return null;

  return (
    <div
      ref={overlayRef}
      className="detail-modal-overlay"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        animation: 'modalOverlayIn .3s ease forwards',
      }}
    >
      <div
        ref={panelRef}
        className="detail-modal-panel"
        style={{
          width: '100%', maxWidth: '640px', maxHeight: '85vh',
          overflowY: 'auto', overflowX: 'hidden',
          background: 'var(--bg2)',
          border: '1px solid rgba(0,212,170,0.12)',
          borderRadius: '24px',
          position: 'relative',
          animation: 'modalPanelIn .4s cubic-bezier(.16,1,.3,1) forwards',
        }}
      >
        {/* Top gradient glow */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '200px',
          background: type === 'service'
            ? 'radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.1) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at 50% 0%, rgba(124,92,252,0.1) 0%, transparent 70%)',
          pointerEvents: 'none', borderRadius: '24px 24px 0 0',
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'sticky', top: '16px', float: 'right', marginRight: '16px',
            zIndex: 10, width: '36px', height: '36px', borderRadius: '12px',
            border: '1px solid var(--border)', background: 'var(--bg3)',
            color: 'var(--muted)', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            transition: 'all .3s',
          }}
          onMouseEnter={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
          onMouseLeave={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)'; }}
          aria-label="Close"
        >
          <FaTimes size={14} />
        </button>

        <div style={{ padding: '2.5rem 2rem 2rem', position: 'relative', zIndex: 1 }}>
          {/* Icon + Number badge */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: type === 'service' ? 'var(--accent-dim)' : 'var(--accent-dim2)',
              border: `1px solid ${type === 'service' ? 'rgba(0,212,170,0.15)' : 'rgba(124,92,252,0.15)'}`,
              color: type === 'service' ? 'var(--accent)' : 'var(--accent-2)',
              fontSize: '1.5rem',
            }}>
              <DynamicIcon name={data.icon} size={28} />
            </div>
            {data.num && (
              <span style={{
                fontFamily: "'Outfit',sans-serif", fontSize: '.75rem', fontWeight: 700,
                color: 'var(--muted)', letterSpacing: '2px',
              }}>
                {data.num}
              </span>
            )}
            {data.status && (
              <div className="status-badge">
                <span className="dot" />
                <span>{data.status}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: '1.5rem',
            color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '.5rem',
            lineHeight: 1.2,
          }}>
            {data.title}
          </h3>

          {/* Category tag */}
          {data.category && (
            <span style={{
              display: 'inline-block', fontSize: '.65rem', letterSpacing: '2px',
              textTransform: 'uppercase', fontWeight: 600,
              color: 'var(--accent)', marginBottom: '1.2rem',
            }}>
              {data.category}
            </span>
          )}

          {/* Description */}
          <p style={{
            fontSize: '.92rem', lineHeight: 1.85, color: 'var(--muted)',
            marginBottom: '1.5rem', marginTop: data.category ? 0 : '0.5rem',
          }}>
            {data.desc}
          </p>

          {/* Details / Long description */}
          {data.details && (
            <p style={{
              fontSize: '.88rem', lineHeight: 1.85, color: 'var(--text-secondary)',
              marginBottom: '1.5rem', paddingTop: '1rem',
              borderTop: '1px solid var(--border)',
            }}>
              {data.details}
            </p>
          )}

          {/* Features list */}
          {data.features && data.features.length > 0 && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{
                fontSize: '.7rem', letterSpacing: '3px', textTransform: 'uppercase',
                fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem',
              }}>
                Key Features
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {data.features.map((feat, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    padding: '10px 14px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border)',
                  }}>
                    <FaCheck size={10} style={{ color: 'var(--accent)', marginTop: '5px', flexShrink: 0 }} />
                    <span style={{ fontSize: '.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
              {data.tags.map((tag, j) => (
                <span key={j} className="tag-chip">{tag}</span>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <a href="#contact" onClick={onClose}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px', borderRadius: '14px', fontSize: '.85rem',
              fontWeight: 600, cursor: 'pointer',
              background: 'var(--gradient-accent)', color: '#0a0a0f',
              transition: 'all .4s', textDecoration: 'none',
            }}
            onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 0 30px rgba(0,212,170,0.3)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
          >
            <span>Get Started</span>
            <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
