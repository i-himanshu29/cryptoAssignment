import React, { useState, useEffect } from "react";

function NavbarWithTimer() {
  // Set the initial time to 60 seconds (1 minute)
  const [timeLeft, setTimeLeft] = useState(60);

  // Function to format the time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // useEffect to handle the countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer); // Clean up interval on component unmount
    }
  }, [timeLeft]);

  return (
    <div className="bg-gray-900 text-md text-white p-3 flex justify-between items-center rounded-full">

      {/* Timer */}
      <div className="text-md font-bold rounded-lg" >
        {timeLeft > 0 ? formatTime(timeLeft) : "Time's Up!"}
      </div>
    </div>
  );
}

export default NavbarWithTimer;
