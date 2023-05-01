import React, { useEffect, useState } from "react";
import RouteSwitch from "./RouteSwitch";
import NavBar from "./NavBar";

function App() {
  const [cartFull, setCartFull] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      setCartFull(true);
    } else if (cart.length == 0) {
      setCartFull(false);
    };
  }, [cart])

  return (
    <div className="app">
      <NavBar cartFull={cartFull} cart={cart}/>
      <RouteSwitch cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;
