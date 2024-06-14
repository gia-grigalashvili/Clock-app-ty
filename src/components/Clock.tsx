import React, { useEffect, useState } from "react";
import sun from "/public/assets/desktop/icon-sun.svg";
import styled from "styled-components";
function Clock() {
  const [timeData, setTimeData] = useState(null);
  const [info, setinfo] = useState(null);
  //iqve icvleba dro
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    fetchinfo();
    fetchTime();
    return () => clearInterval(interval);
  }, []);

  //moaq dro
  const fetchTime = async () => {
    try {
      const response = await fetch(
        "http://worldtimeapi.org/api/timezone/Etc/UTC"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTimeData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const fetchinfo = async () => {
    try {
      const response = await fetch(
        "https://api.ipbase.com/v2/info?apikey=ipb_live_X3di55yYvrwhl9G4JshVAHbhmo2oHLyMWk2Ui5ck&ip=1.1.1.1"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setinfo(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  console.log(info);
  //amowra drosi
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

  return (
    <Information>
      <Sunmoon>
        <img src={sun} alt="" />
        <p>GOOD MORNING</p>
      </Sunmoon>

      <h5>{getTimeString()}</h5>

      <p>
        {info?.data.location.continent.name},
        <span>{info?.data.location.continent.code}</span>
      </p>
    </Information>
  );
}

const Information = styled.div`
  margin-top: 240px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  h5 {
    color: #fff;

    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 100px; /* 100% */
    letter-spacing: -2.5px;
  }
  p {
    color: #fff;

    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 186.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`;

const Sunmoon = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  p {
    color: #fff;

    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
export default Clock;
