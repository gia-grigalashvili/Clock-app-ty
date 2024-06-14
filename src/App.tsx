import "./App.css";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import styled from "styled-components";
interface GlobalStyleProps {
  isDark: boolean;
}
function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [timeData, setTimeData] = useState<any>(null);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch("https://api.quotable.io/random");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setTimeData(data);
  //     } catch (error) {
  //       console.error("Failed to fetch data:", error);
  //     }
  //   })();
  // }, []);
  return (
    <>
      <GlobalStyle isDark={isDark} />
    </>
  );
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${(props) =>
      props.isDark
        ? "/public/assets/mobile/bg-image-daytime.jpg"
        : "/public/assets/mobile/bg-image-daytime.jpg"};
  }
`;
export default App;
