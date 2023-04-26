import React, { useState } from "react";
import RouteSwitch from "./RouteSwitch";

function App() {
  const [cartFull, setCartFull] = useState(false);

  return (
    <div className="app">
      <RouteSwitch cartFull={cartFull}/>
    </div>
  );
}

export default App;
