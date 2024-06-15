import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import More from "./components/More";
import Clock from "./components/Clock";
import styled from "styled-components";
import bgDaytime from "/public/assets/mobile/bg-image-daytime.jpg";
import bgNighttime from "/public/assets/mobile/bg-image-nighttime.jpg";
import { createGlobalStyle } from "styled-components";
import desktopnigth from "/public/assets/desktop/bg-image-nighttime.jpg";
import destopdaytime from "/public/assets/desktop/bg-image-daytime.jpg";
interface TimeData {
  datetime: string;
}

const App: React.FC = () => {
  const [timeData, setTimeData] = useState<TimeData | null>(null);
  const [show, setShow] = useState<boolean>(false);

  const getTimeString = () => {
    if (timeData && timeData.datetime) {
      const datetime = new Date(timeData.datetime);
      return datetime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return "";
  };

  const isNightTime = () => {
    if (timeData && timeData.datetime) {
      const datetime = new Date(timeData.datetime);
      const hour = datetime.getHours();

      return hour >= 20 || hour < 7;
    }
    return false;
  };

  return (
    <>
      <GlobalStyle isNight={isNightTime()} />
      <Maindiv show={show}>
        <Header />
        <div className="navigat">
          <Clock setTimeData={setTimeData} getTimeString={getTimeString} />
          <More show={show} handleClick={() => setShow(!show)} />
        </div>
      </Maindiv>
    </>
  );
};

const Maindiv = styled.div<{ show: boolean }>`
  margin-top: ${(props) => (props.show ? "-200px" : "")};

  .navigat {
    @media (min-width: 1440px) {
      display: flex;
      margin-top: 240px;
      align-items: center;
      gap: 300px;
      justify-content: space-around;
    }
  }
`;

const GlobalStyle = createGlobalStyle<{ isNight: boolean }>`
  body {
    background-image: ${(props) =>
      props.isNight ? `url(${bgNighttime})` : `url(${bgDaytime})`};
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    transition: background-image 0.5s ease-in-out;
    @media (min-width: 1440px){
      background-image: ${(props) =>
        props.isNight ? `url(${desktopnigth})` : `url(${destopdaytime})`};

    }
  }
`;

export default App;
