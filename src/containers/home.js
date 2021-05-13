import React from "react";

// Components
import Title from "../components/home/title/index";
import Countdown from "../components/home/countdown/index";

// Style
import "../App.css";

const home = ({ countdownData }) => {
  return (
    <>
      <Title />
      <div className="home-container">
        {countdownData.map((data, index) => {
          return <Countdown key={index} data={data} />;
        })}
      </div>
    </>
  );
};

export default home;
