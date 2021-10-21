import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid black;
  width: 100px;
  height: 50px;
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.background};
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease-out;
`;

export default function Button({ theme, setTheme }) {
  const changeTheme = () => {
    if (theme === "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  };
  return (
    <>
      <StyledButton onClick={changeTheme}>{`${theme}`}</StyledButton>
    </>
  );
}
