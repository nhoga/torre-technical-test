import React, { Component } from "react";
import "./App.css";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div className="column">
        <a href="/">
          {" "}
          <h1 className="title">Torre User Result's</h1>
        </a>

        <Search />
      </div>
    );
  }
}

export default App;
