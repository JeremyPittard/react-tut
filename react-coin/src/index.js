import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/common/Header.js";
import "./index.css";
const App = () => {
  const title = "React Coin";
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <p>Up to date crypto currrencies and what not</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
