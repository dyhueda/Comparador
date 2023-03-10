import { useState } from "react";
import Form from "../Components/Form";
import Result from "../Components/Result";

export default function Home() {
  const [state, setState] = useState({
    quantidade1: 1,
    quantidade2: 1,
    preco1: 1,
    preco2: 1,
    medida1: 1,
    medida2: 1,
  });

  const updateValues = (newState) => {
    setState({
      ...state,
      ...newState,
    });
  };
  return (
    <div className="container">
      <h1>Qual Compensa? </h1>
      <div className="wrapper">
        <Form state={state} updateValues={updateValues} />
        <Result state={state} />
      </div>
    </div>
  );
}
