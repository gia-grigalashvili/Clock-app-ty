import React, { useEffect, useState } from "react";
import styled from "styled-components";
import refresh from "/public/assets/desktop/icon-refresh.svg";

interface Quote {
  content: string;
  author: string;
}

const Header: React.FC = () => {
  const [quoteData, setQuoteData] = useState<Quote | null>(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Quote = await response.json();
      setQuoteData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <HeaderDiv>
      <Text>
        <p>"{quoteData?.content}"</p>
        <h1>{quoteData?.author}</h1>
      </Text>
      <RefreshIcon src={refresh} alt="Refresh" onClick={fetchQuote} />
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: center;
  padding: 20px;
  img {
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    justify-content: unset;
    max-width: 400px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    color: #fff;

    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
  }
  h1 {
    color: #fff;

    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 183.333% */
  }
`;

const RefreshIcon = styled.img`
  cursor: pointer;
`;

export default Header;
