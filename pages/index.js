import { useState } from "react";
import Form from "../Components/Form";
import Result from "../Components/Result";

export default function Home() {
  const [state, setState] = useState({
    quantity1: 1,
    quantity2: 1,
    price1: 1,
    price2: 1,
    measure1: 1,
    measure2: 1,
    type1:'g',
    type2:'g'
  });

  const updateValues = (newState) => {
    setState({
      ...state,
      ...newState,
    });
  };
  return (
    <div className="container">
      <h1>Which one is cheaper? </h1>
      <div className="wrapper">
        <Form state={state} updateValues={updateValues} />
        <Result state={state} />
      </div>
    </div>
  );
}
