import React, { useState } from "react";
import Cloud from "./components/Cloud";

const Home = () => {
  const [range, setRange] = useState(50);

  return (
    <div>
      <Cloud range={range} />

      <div className="selector">
        <input
          type="range"
          min={1}
          max={100}
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />

        <p className="rangeInput">{range}</p>
      </div>
    </div>
  );
};

export default Home;
