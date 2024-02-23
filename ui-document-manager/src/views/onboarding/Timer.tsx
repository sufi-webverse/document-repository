import LoadingBar from "@/components/LoadingBar";
import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ initialMinute = 2, initialSeconds = 0 }: any) => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      console.log("timer", minutes, seconds);
    }, 1000);
    return () => {
      clearInterval(myInterval);
      console.log("timer-exit", minutes, seconds);
    };
  });

  return (
    <div>
      {/* <div className="h-[4px] w-full absolute top-0 bg-gray-100">
        <div
          className="h-[4px] bg-primary"
          style={{
            width: seconds,
          }}
        ></div>
      </div> */}
      Timer {minutes} {seconds}
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  );
};

export default Timer;
