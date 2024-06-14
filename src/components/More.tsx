import React from "react";
import styled from "styled-components";

function More() {
  return (
    <Button>
      <p>more</p>
      <Secondbtn></Secondbtn>
    </Button>
  );
}
const Button = styled.div`
  display: flex;
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
    line-height: 14px; /* 116.667% */
    letter-spacing: 3.75px;
    text-transform: uppercase;
  }
`;
const Secondbtn = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ##292929;
`;
export default More;
