// import logo from "./logo.svg";
// import "./App.css";
import Button from "./components/Button/index";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

const DarkTheme = {
  status: "dark",
  background: "black",
  fontColor: "white",
  mainBackground: "white",
};

const LightTheme = {
  status: "light",
  background: "white",
  fontColor: "black",
  mainBackground: "black",
};

const themes = {
  Light: LightTheme,
  Dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("Dark");

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles background={themes[theme].mainBackground} />
        <div className="App">
          <header className="App-header">
            <Button theme={theme} setTheme={setTheme} />
          </header>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
