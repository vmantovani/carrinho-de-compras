import React from "react";

const Cards = ({ item, handleClick }) => {
  const { id, name, genus, family } = item;
  return (
    <div className="card">
      <div className="info-card">
        <div className="title">
          <p>{name}</p>
          <p>Código: {id}</p>
        </div>
        <div className="detail">
          <p>{genus}</p>
          <p>{family}</p>
        </div>

        <button onClick={() => handleClick(item)}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default Cards;
