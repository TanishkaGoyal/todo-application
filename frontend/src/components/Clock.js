import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.clockContainer}>
      <h2>Current Time</h2>
      <p style={styles.timeText}>{time.toLocaleTimeString()}</p>
    </div>
  );
};

const styles = {
  clockContainer: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    display: 'inline-block'
  },
  timeText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '10px 0'
  }
};

export default Clock;
