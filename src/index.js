import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>List Editor</h1>
      <h2>manage your notes</h2>
      <List />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
