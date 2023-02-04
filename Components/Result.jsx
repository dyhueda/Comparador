import React from "react";

const Result = ({ state }) => {
  const { quantidade1, quantidade2, preco1, preco2, medida1, medida2} = state;
  const preçoitem1 = Number((state.quantidade1*state.medida1/state.preco1)).toFixed(2)
  const preçoitem2 = Number((state.quantidade2*state.medida2/state.preco2)).toFixed(2)
  return (
    <div className="result">
      <div>
        <p className="label">Preço do item 1</p>{" "}
        <p className="result">{`$ ${preçoitem1}/g`}</p>
      </div>
      <div>
        <p className="label">Preço do item 2</p>{" "}
        <p className="result">{`$ ${preçoitem2}/g`}</p>
      </div>
      

    </div>
  );
  
};

export default Result;
