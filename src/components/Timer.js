import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(10); 

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <div className="timer">
      <p>Time remaining: {seconds} seconds</p>
    </div>
  );
};

export default Timer;
