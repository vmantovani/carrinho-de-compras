import React, { useState } from "react";
import Carrinho from "./components/Carrinho";
import Loja from "./components/Loja";
import Navbar from "./components/Navbar";

function App() {
  /*COLOCAR ITENS NO CARRINHO*/

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  /*MUDAR DA LISTA DE ITENS PRO CARRINHO(VICE VERSA)*/

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Loja handleClick={handleClick} />
      ) : (
        <Carrinho cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
