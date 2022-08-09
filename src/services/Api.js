// import React, { useState, useEffect } from "react";

// const Api = () => {
//   //useState
//   const [vetor, setVetor] = useState([]);

//   //useEffect
//   useEffect(() => {
//     obterDados();
//   });

//   //Função para obter os dados da API
//   const obterDados = async () => {
//     const dados = await fetch("/api/fruit/all");
//     const converter = await dados.json();
//     setVetor(converter);
//   };

//   return (
//     <div>
//       <ul>
//         {vetor.map(({ id, name }, index) => (
//           <li key={index}>
//             {id} {name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Api;
