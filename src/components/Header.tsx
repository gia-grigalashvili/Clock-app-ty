import { useEffect, useState } from "react";
import styled from "styled-components";
import refresh from "/public/assets/desktop/icon-refresh.svg";
function Header() {
  const [quoteData, setQuoteData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuoteData(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    })();
  }, []);

  console.log(quoteData);
  return (
    <HeaderDiv>
      <div>
        <p>{quoteData.content}</p>
        <h1>{quoteData.author}</h1>
      </div>
      <img src={refresh} alt="" />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Text = styled.div`
  p {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
  }
  h1 {
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 183.333% */
  }
`;
export default Header;
