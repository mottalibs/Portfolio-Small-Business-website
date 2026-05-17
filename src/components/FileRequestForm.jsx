'use client';
import { useState } from 'react';
import { useMode } from './ModeProvider';
import { FaCloudUploadAlt, FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';

export default function FileRequestForm() {
  const { mode } = useMode();
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [status, setStatus] = useState('idle'); // idle, uploading, success

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file && !text) return;
    
    setStatus('uploading');
    
    // Mock upload delay
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFile(null);
        setText('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bento-card h-full">
      <div className="flex items-center gap-3 mb-6">
        <FaCloudUploadAlt size={24} className="text-[var(--accent)]" />
        <h3 className="heading-serif text-xl">
          {mode === 'cyberpunk' ? 'QUICK_REQUEST_TERMINAL' : 'Quick Job Request'}
        </h3>
      </div>
      
      <p className="text-[0.8rem] text-[var(--text-secondary)] mb-6">
        {mode === 'cyberpunk' 
          ? 'Upload payload (.pdf, .jpg) or inject text string for rapid processing at Chan Matha Hub.'
          : 'Upload your document or paste text here to request a print, photocopy, or application job instantly.'}
      </p>

      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-8 text-[var(--accent-2)]">
          <FaCheckCircle size={48} className="mb-4" />
          <p className="text-mono font-bold text-sm">
            {mode === 'cyberpunk' ? 'PAYLOAD_ACCEPTED' : 'Request Sent Successfully!'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
          {/* File Upload Area */}
          <div className="relative border-2 border-dashed border-[var(--border)] rounded-[var(--r)] p-6 flex flex-col items-center justify-center text-center hover:border-[var(--accent)] transition-colors cursor-pointer group bg-[var(--bg)]">
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <FaCloudUploadAlt size={24} className="text-[var(--muted)] group-hover:text-[var(--accent)] mb-2 transition-colors" />
            <span className="text-mono text-[0.7rem] text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
              {file ? file.name : (mode === 'cyberpunk' ? 'DRAG_FILE_HERE' : 'Click to Upload Document')}
            </span>
          </div>

          <textarea
            placeholder={mode === 'cyberpunk' ? "INJECT_TEXT_DATA..." : "Or paste your text/instructions here..."}
            className="form-input flex-1 min-h-[80px]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button 
            type="submit" 
            disabled={!file && !text}
            className="btn-brutalist mt-auto w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'uploading' ? (
              <><FaSpinner className="animate-spin" /> {mode === 'cyberpunk' ? 'UPLOADING...' : 'Processing...'}</>
            ) : (
              <>{mode === 'cyberpunk' ? 'EXECUTE' : 'Send Request'} <FaPaperPlane size={12}/></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
