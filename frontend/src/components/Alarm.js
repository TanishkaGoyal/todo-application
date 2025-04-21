import React, { useState } from 'react';

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmMessage, setAlarmMessage] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmTriggered, setAlarmTriggered] = useState(false);

  const handleAlarmSet = () => {
    if (!alarmTime) {
      alert('Please set a time for the alarm');
      return;
    }

    const alarmDate = new Date(alarmTime).getTime();
    const currentTime = new Date().getTime();

    // Check if the set alarm time is in the future
    if (alarmDate <= currentTime) {
      alert('Please set a future time for the alarm');
      return;
    }

    setIsAlarmSet(true);
    setAlarmTriggered(false);

    // Trigger alarm when the time arrives
    const timer = setInterval(() => {
      if (new Date().getTime() >= alarmDate) {
        clearInterval(timer);
        setAlarmTriggered(true);
        alert(alarmMessage || 'Alarm is ringing!');
      }
    }, 1000);
  };

  const handleAlarmCancel = () => {
    setIsAlarmSet(false);
    setAlarmTriggered(false);
    setAlarmTime('');
    setAlarmMessage('');
  };

  return (
    <div className="alarm-container">
      <h2>Set an Alarm</h2>
      {alarmTriggered && <p className="alarm-triggered">Alarm Triggered!</p>}

      <div className="form-group">
        <label>Alarm Time</label>
        <input
          type="datetime-local"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Alarm Message (Optional)</label>
        <input
          type="text"
          value={alarmMessage}
          onChange={(e) => setAlarmMessage(e.target.value)}
          placeholder="Enter a message for the alarm"
        />
      </div>

      <div className="alarm-actions">
        {isAlarmSet ? (
          <button onClick={handleAlarmCancel} className="cancel-alarm-btn">
            Cancel Alarm
          </button>
        ) : (
          <button onClick={handleAlarmSet} className="set-alarm-btn">
            Set Alarm
          </button>
        )}
      </div>
    </div>
  );
};

export default Alarm;
