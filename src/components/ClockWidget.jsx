'use client';
import { useState, useEffect } from 'react';
import { useMode } from './ModeProvider';
import { FaCircle } from 'react-icons/fa';

export default function ClockWidget() {
  const [time, setTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useMode();

  useEffect(() => {
    const updateTime = () => {
      const bdTimeObj = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));
      const hours = bdTimeObj.getHours();
      
      // Business hours: 9 AM (9) to 10 PM (22)
      setIsOpen(hours >= 9 && hours < 22);

      const bdTimeString = bdTimeObj.toLocaleTimeString('en-US', {
        hour12: mode === 'corporate', // 12-hour format for corporate, 24 for cyber
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(bdTimeString);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [mode]);

  return (
    <div className="bento-card justify-between h-full group">
      <div>
        <div className="text-mono text-[0.65rem] text-[var(--muted)] tracking-[2px] mb-2 uppercase">
          {mode === 'cyberpunk' ? 'LOCAL_SYS_TIME' : 'Local Time (BD)'}
        </div>
        <div className="heading-serif text-3xl font-bold">
          {time || '00:00:00'}
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-[var(--border)] flex items-center justify-between">
        <span className="text-mono text-[0.65rem] text-[var(--muted)]">
          {mode === 'cyberpunk' ? 'OP_STATUS' : 'Current Status'}
        </span>
        <div className="flex items-center gap-2">
          <FaCircle size={8} className={isOpen ? "text-[#059669] animate-pulse" : "text-[#dc2626]"} />
          <span className={`text-mono text-[0.7rem] font-bold ${isOpen ? "text-[#059669]" : "text-[#dc2626]"}`}>
             {isOpen 
                ? (mode === 'cyberpunk' ? 'SYS_ONLINE' : 'OPEN')
                : (mode === 'cyberpunk' ? 'SYS_OFFLINE' : 'CLOSED')
             }
          </span>
        </div>
      </div>
    </div>
  );
}
