import React, { useState, useEffect, useRef } from 'react';
import stopwatchImage from '../assets/stopwatch-timer.png';
import backgroundImage from '../assets/backgroundtimer.jpeg';
import './TimerComponent.css'; 

function TimerComponent() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="stop-watch" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='stopwatch-card-header'>
        <img src={stopwatchImage} alt="Stopwatch" />
        <p className='timer-heading'>Timer</p>
      </div>
      <div className='timer-display'>
        <p>{formatTime(time)}</p>
      </div>
      <div className='button-container'>
        <button className='start-button' onClick={startTimer}>Start</button>
        <button className='stop-button' onClick={stopTimer}>Stop</button>
        <button className='reset-button' onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default TimerComponent;
