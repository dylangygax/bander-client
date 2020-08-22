import React from 'react';
import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>B A N D E R</h1>
      <Button buttonText={"BEE BOOP"} url={"http://www.neopets.com/"}></Button>
      <Button buttonText={"BEE BOOP"} url={"http://www.neopets.com/"} openInNewTab={true}></Button>
    </div>
  );
}

export default App;
