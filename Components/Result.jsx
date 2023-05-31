import React from "react";

const Result = ({ state }) => {
  const priceitem1 = Number((state.price1/(state.quantity1*state.measure1))).toFixed(4)
  const priceitem2 = Number((state.price2/(state.quantity2*state.measure2))).toFixed(4)
  return (
    <div className="result">
      <div className="result-left">
        <p className="label">Price of item 1</p>{" "}
        <p className="result">{`$ ${priceitem1}/${state.type1}`}</p>
      </div>
      <div className="result-right">
        <p className="label">Price of item 2</p>{" "}
        <p className="result">{`$ ${priceitem2}/${state.type2}`}</p>
      </div>
    </div>
  );
  
};

export default Result;
