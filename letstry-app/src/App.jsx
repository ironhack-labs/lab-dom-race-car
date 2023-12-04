import { useState } from "react";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NextPage from "./components/NextPage";
import Button from "./components/Button";

// function App() {
const App = () => {
  const [count, setCount] = useState(0);
  const element = <h3>is it working in the same way</h3>;

  const traveler = {
    firstWord: "The Great",
    lastWord: "kittie",
  };

  return (
    <div className="App">
      <div className="lets try">
        <Navbar />
        <hr />
        <NextPage firstName="Props Name" />
        {/* atrribute className this is prop &  Name is available only inside*/}
        <NextPage />
        <NextPage />
        <hr />
        <div className="Navbar">{element}</div>
        <h1>whateva fcking life wants from me</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          checkng my temper {count}
        </button>
      </div>
      <h2>
        Hi, {traveler.firstWord}
        {traveler.lastWord}
      </h2>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <p>the darkest nights mean you see the starts the most</p>
      </div>
    </div>
  );
};

// class OfSmth extends Component {
//   render() {
//     return (
//       <div>
//         <h2> let go girl</h2>
//       </div>
//     );
//   }
// }

export default App;
