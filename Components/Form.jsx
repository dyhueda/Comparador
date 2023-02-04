import React from "react";

const Form = ({ state, updateValues }) => {
  const { quantidade1, quantidade2, preco1, preco2, medida1, medida2 } = state;
  return (
    <section className="section">  
      <div className="input-container">
        <div className="input-group">
          <label htmlFor="Quantidade Item 1">Quantidade da Primeira Opção</label>
          <input
            onChange={(e) => {
              updateValues({
                quantidade1: e.target.value,
              });
            }}
            value={quantidade1}
            type="number"
            id="quantidade1"
          />
        </div>
        <div className="input-group">
          <label htmlFor="Unidade de Medida Primeiro Item">Peso da Primeira Opção</label>
          <input
            onChange={(e) => {
              updateValues({
                medida1: e.target.value,
              });
            }}
            value={medida1}
            type="number"
            id="medida1"
          />
        </div>
            
        <div className="input-group">
          <label htmlFor="Preco do item 1">Preço da Primeira Opção</label>
          <input
            onChange={(e) => {
              updateValues({
                preco1: e.target.value,
              });
            }}
            value={preco1}
            type="number"
            id="preco1"
          />
        </div>
        
      </div>
      <div className="input-container">
      <div className="input-group">
          <label htmlFor="Quantidade Item 2">Quantidade da Segunda Opção</label>
          <input
            onChange={(e) => {
              updateValues({
                quantidade2: e.target.value,
              });
            }}
            value={quantidade2}
            type="number"
            id="quantidade2"
          />
        </div>
        <div className="input-group">
          <label htmlFor="Unidade de Medida Segundo Item">Peso da Segunda Opção</label>
          <input
            onChange={(e) => {
              updateValues({
                medida2: e.target.value,
              });
            }}
            value={medida2}
            type="number"
            id="medida2"
          />
        </div>
            
        <div className="input-group">
          <label htmlFor="Preco do item 2">Preço da Segunda Opção</label>
          <input
            onChange={(e) => {
              updateValues({
                preco2: e.target.value,
              });
            }}
            value={preco2}
            type="number"
            id="preco2"
          />
        </div>

      </div>
    </section>
    
  );
};

export default Form;
