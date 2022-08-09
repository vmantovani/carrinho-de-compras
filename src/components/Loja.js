import React, { useState, useEffect } from "react";
import Cards from "./Card";
import "../styles/loja.css";

const Loja = ({ handleClick }) => {
  /* BUSCAR DADOS DA API */
  //useState
  const [vetor, setVetor] = useState([]);

  //useEffect
  useEffect(() => {
    obterDados();
  });

  //Função para obter os dados da API
  const obterDados = async () => {
    const dados = await fetch("/api/fruit/all");
    const converter = await dados.json();
    setVetor(converter);
  };

  return (
    <section>
      {vetor.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Loja;
