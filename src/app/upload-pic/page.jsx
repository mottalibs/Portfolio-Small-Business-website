'use client';
import { useState } from 'react';

export default function UploadPicPage() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    const fileInput = e.target.elements.file;
    if (!fileInput.files[0]) {
      setStatus('Please select a file first.');
      return;
    }

    setLoading(true);
    setStatus('Uploading...');

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('✅ Success! Your picture has been uploaded to the website.');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        setStatus('❌ Upload failed.');
      }
    } catch (err) {
      setStatus('❌ Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white p-8">
      <div className="bg-white/5 border border-white/10 p-10 rounded-2xl max-w-md w-full backdrop-blur-md">
        <h1 className="text-2xl font-bold mb-6 text-[#7cff6b] text-center">Upload Your Picture</h1>
        <p className="text-gray-400 mb-8 text-center text-sm">
          Select your <b>Me.jpg</b> file from your <i>My informations</i> folder to upload it directly to the website.
        </p>
        
        <form onSubmit={handleUpload} className="flex flex-col gap-6">
          <input 
            type="file" 
            name="file" 
            accept="image/*"
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#7cff6b] file:text-black hover:file:bg-white cursor-pointer text-sm text-gray-300"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#7cff6b] text-black font-bold py-3 rounded-xl hover:bg-white transition-colors shadow-[0_0_15px_rgba(124,255,107,0.3)] disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Upload Picture'}
          </button>
        </form>

        {status && (
          <div className="mt-6 text-center text-sm font-medium p-3 bg-white/5 rounded-lg border border-white/10">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
