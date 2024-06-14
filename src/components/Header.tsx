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
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export default Header;
