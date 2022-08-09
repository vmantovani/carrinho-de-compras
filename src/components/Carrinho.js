import React from "react";
import "../styles/cart.css";

const Carrinho = ({ cart, setCart, handleChange }) => {
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  return (
    <>
      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p>{item.name}</p>
              <div className="detail">
                <p>{item.genus}</p>
                <p>{item.family}</p>
              </div>
            </div>
            <div>
              <button onClick={() => handleChange(item, -1)}>-</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, +1)}>+</button>
            </div>
            <div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};

export default Carrinho;
