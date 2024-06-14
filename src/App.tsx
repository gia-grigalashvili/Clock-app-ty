import "./App.css";
// import { useEffect, useState } from "react";
// import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";
import Header from "./components/Header";
// interface GlobalStyleProps {
//   isDark: boolean;
// }
function App() {
  // const [isDark, setIsDark] = useState<boolean>(false);

  // const toggleDarkMode = () => {
  //   setIsDark(!isDark);
  // };

  return (
    <>
      {/* <GlobalStyle isDark={isDark} /> */}
      <Header></Header>
    </>
  );
}

// const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
//   body {
//     background-color: ${(props) =>
//       props.isDark
//         ? "/public/assets/mobile/bg-image-daytime.jpg"
//         : "/public/assets/mobile/bg-image-daytime.jpg"};
//   }
// `;
export default App;
