import {useEffect, useState} from 'react';


function Timer() {
    const [timeLeft, setTimeLeft] = useState(120);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return <div>Waktu tersisa: {timeLeft} detik</div>;
}

export default Timer;