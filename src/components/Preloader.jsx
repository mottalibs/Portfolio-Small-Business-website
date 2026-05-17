'use client';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    // Generate terminal logs
    const bootSequence = [
      "INIT_SYSTEM_CORE... OK",
      "ALLOCATING_MEMORY_BLOCKS... 1024MB",
      "ESTABLISHING_SECURE_CONNECTION... ESTABLISHED",
      "BYPASSING_FIREWALL... ACCESS GRANTED",
      "DECRYPTING_DOSSIER_FILES... 45%",
      "DECRYPTING_DOSSIER_FILES... 89%",
      "DECRYPTING_DOSSIER_FILES... 100%",
      "LOADING_ASSETS... COMPLETED",
      "INITIALIZING_UI_GRID... ONLINE",
      "SYSTEM_READY"
    ];

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < bootSequence.length) {
        setLogs(prev => {
          const newLogs = [...prev, bootSequence[logIndex]];
          return newLogs.slice(-5); // Keep only last 5 lines
        });
        logIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 200);

    // Progress counter
    const duration = 2500; // Total time in ms
    const startTime = Date.now();
    
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);
      
      // Random glitch effect
      if (Math.random() > 0.8) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => setDone(true), 500); // Small delay after reaching 100%
      }
    }, 50);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={`preloader ${done ? 'done' : ''}`} style={{ filter: glitch ? 'invert(100%)' : 'none' }}>
      <div className="preloader-grid">
        <p>SECTOR: SECURE</p>
        <p>AUTH_LEVEL: CLEARANCE_ALPHA</p>
        <p>SYS_TIME: {new Date().toLocaleTimeString('en-US', { hour12: false })}</p>
      </div>

      <div className="preloader-counter">
        {progress < 10 ? `0${progress}` : progress}<span style={{ fontSize: '0.5em', color: 'var(--accent)' }}>%</span>
      </div>

      <div className="preloader-waveform">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      <div className="text-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '4px' }}>
        LOADING_DOSSIER
      </div>

      <div className="preloader-terminal">
        {logs.map((log, idx) => (
          <span 
            key={idx} 
            className={`preloader-log-line ${idx === logs.length - 1 ? 'active' : ''}`}
          >
            > {log}
          </span>
        ))}
      </div>
    </div>
  );
}
