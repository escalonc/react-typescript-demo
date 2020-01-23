import React from "react";
import "./App.css";
import Quote from "./containers/QuoteInformation/Quote";
import "antd/dist/antd.css";

const App: React.FC = () => {
  return (
    <div className="main">
      <header>
        <h1>Buy a new Macbook Pro</h1>
        <p>
          <span>16-inch Retina display with True Tone</span>
          <span>Four Thunderbolt 3 ports</span>
          <span>Touch Bar and Touch ID</span>
          <span>Backlit Keyboard - US English</span>
        </p>
      </header>

      <Quote />
    </div>
  );
};

export default App;
