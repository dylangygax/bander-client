import React from "react";
import routes from "./config/routes";
import "./App.css"
import Header from "./components/Header"


function App() {
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Button from "./components/Button";
// import MatchCard from "./components/MatchCard";

// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-white">B A N D E R</h1>
//       <MatchCard />

//       <div className="d-flex flex-column">
//         <Button className="p-3" buttonText={"BEE BOOP"} url={"http://www.neopets.com/"}></Button> <br />
//         <Button buttonText={"BEE BOOP"} url={"http://www.neopets.com/"} openInNewTab={true}></Button>
//       </div>

//     </div>
//   );
// }

// export default App;
