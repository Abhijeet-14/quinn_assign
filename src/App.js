import React from "react";
import "./App.css";
import { Button } from "@material-ui/core";

import MyComponents from "./Components/MyComponents";

function App() {
  

  return (
    <div className="App">
      <div
        style={{
          width: "150px",
          backgroundColor: "#1DB067",
          borderRadius: "20px",
          padding: "5px",
          marginLeft: "40%",
        }}
      >
        <a
          href="https://quinn-assign.netlify.app"
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          WebSite
        </a>
      </div>
      <MyComponents />
    </div>
  );
}

export default App;
