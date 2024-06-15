import React, { useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "/public/assets/desktop/icon-arrow-down.svg";
import arrowdow from "/public/assets/desktop/icon-arrow-up.svg";
interface TimeData {
  day_of_year: number;
  day_of_week: number;
  week_number: number;
}

// interface MoreProps {
//   handleClick: () => void;
//   show: boolean;
//   isNightTime: boolean;
// }
function More({ handleClick, show, isNightTime }) {
  const [timeData, setTimeData] = useState<TimeData | null>(null);
  const [showe1, setshowe1] = useState(false);

  const handleclick = () => {
    setshowe1(!showe1);
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "http://worldtimeapi.org/api/timezone/Etc/UTC"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Quote = await response.json();
      setTimeData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <Maindiv>
      <Button onClick={handleClick}>
        <p>more</p>
        <Secondbtn onClick={handleclick}>
          <img src={arrow} alt="" />
        </Secondbtn>
      </Button>

      {show && (
        <Information isNightTime={isNightTime}>
          <div className="style">
            <p>CURRENT TIMEZONE</p>
            <h1>Europe/London</h1>
          </div>
          <div className="style">
            <p>CURRENT TIMEZONE</p>
            <h1>{timeData.day_of_year}</h1>
          </div>
          <div className="style">
            <p>CURRENT TIMEZONE</p>
            <h1>{timeData.day_of_week}</h1>
          </div>
          <div className="style">
            <p>CURRENT TIMEZONE</p>
            <h1>{timeData.week_number}</h1>
          </div>
        </Information>
      )}
    </Maindiv>
  );
}

const Maindiv = styled.div``;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 115px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 28px;
  background: #fff;
  p {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 3.75px;
    text-transform: uppercase;
  }
`;

const Secondbtn = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #292929;
`;

const Information = styled.div<{ isNightTime: boolean }>`
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  background: rgba(0, 0, 0, 0.75);
  /* background-color: ${(props) =>
    props.isNightTime ? "#292929" : "rgba(255, 255, 255, 0.75)"}; */
  backdrop-filter: blur(20.387113571166992px);

  .style {
    display: flex;
    justify-content: space-between;
    height: 100%;
    p {
      color: #fff;
      font-family: Inter;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    h1 {
      color: #fff;
      text-align: right;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export default More;
