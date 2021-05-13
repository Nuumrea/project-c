import React, { useState, useEffect } from "react";

// Style
import "./App.css";

// Containers
import Home from "./containers/home";

// Components

function App() {
  const [timeLeft, setTimeLeft] = useState([]);

  const newYears = "01/01/2022";
  const calculateTimeLeft = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const difference = (newYearsDate - currentDate) / 1000;

    const timeLeft = {
      days: formatTime(Math.floor(difference / 3600 / 24)),
      hours: formatTime(Math.floor(difference / 3600) % 24),
      minutes: formatTime(Math.floor(difference / 60) % 60),
      seconds: formatTime(Math.floor(difference) % 60),
    };
    setTimeLeft(timeLeft);
  };

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  useEffect(() => {
    setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
  }, [timeLeft]);

  const countdownData = [
    {
      number: timeLeft.days,
      text: "Jours",
    },
    {
      number: timeLeft.hours,
      text: "Heures",
    },
    {
      number: timeLeft.minutes,
      text: "Minutes",
    },
    {
      number: timeLeft.seconds,
      text: "Secondes",
    },
  ];

  return (
    <div className="app-container">
      <Home countdownData={countdownData} />
    </div>
  );
}

export default App;
