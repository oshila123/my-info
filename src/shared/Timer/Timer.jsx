import React, { useState, useEffect } from 'react';
import './Timer.scss';

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const slTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Colombo',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="local-timer" title="Local Time in Sri Lanka (IST)">
      <span className="status-dot"></span>
      <span>LK {slTime}</span>
    </div>
  );
};

export default Timer;
