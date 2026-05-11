'use client';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({ target, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const step = Math.ceil(target / 35);
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              start = target;
              clearInterval(interval);
            }
            setCount(start);
          }, duration / 35);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} className="count-up">{count}</span>;
}
