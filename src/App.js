import React, { useState } from "react";
import RouteSwitch from "./RouteSwitch";
import NavBar from "./NavBar";

function App() {
  const [cartFull, setCartFull] = useState(false);

  return (
    <div className="app">
      <NavBar cartFull={cartFull}/>
      <RouteSwitch cartFull={cartFull} setCartFull={setCartFull}/>
    </div>
  );
}

export default App;
