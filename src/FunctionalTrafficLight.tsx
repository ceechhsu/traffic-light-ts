import React, { useState } from "react";

export const FunctionalTrafficLight: React.FC = () => {
  const [trafficLightIndex, setTrafficLightIndex] = useState<number>(0);

  const isRed: string = trafficLightIndex === 0 ? "red" : "black";
  const isYellow: string = trafficLightIndex === 1 ? "yellow" : "black";
  const isGreen: string = trafficLightIndex === 2 ? "green" : "black";

  const nextState = () => {
    if (trafficLightIndex < 2) {
      setTrafficLightIndex(trafficLightIndex + 1);
    } else {
      setTrafficLightIndex(0);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${isRed}`}></div>
        <div className={`circle ${isYellow}`}></div>
        <div className={`circle ${isGreen}`}></div>
      </div>
      <button className="next-state-button" onClick={nextState}>
        Next State
      </button>
    </div>
  );
};
