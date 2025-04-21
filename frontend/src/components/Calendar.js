import React, { useState } from 'react';


const Calendar = () => {
  const [date, setDate] = useState(new Date()); // Initial date is today's date

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Function to get the number of days in the month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate(); // Date of the last day in the given month
  };

  // Function to get the first day of the month
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleMonthChange = (increment) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + increment);
    setDate(newDate);
  };

  const renderCalendar = () => {
    const firstDay = getFirstDayOfMonth(date.getMonth(), date.getFullYear());
    const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
    const calendarDays = [];

    // Create empty slots before the 1st of the month (for alignment)
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Add the actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(
        <div key={i} className="calendar-day">
          {i}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="wall-calendar-container">
      {/* Calendar Header */}
      <div className="calendar-header">
        <button onClick={() => handleMonthChange(-1)}>{"<"}</button>
        <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
        <button onClick={() => handleMonthChange(1)}>{">"}</button>
      </div>

      {/* Days of Week */}
      <div className="calendar-days-of-week">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day-name">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Body with Days */}
      <div className="calendar-body">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
