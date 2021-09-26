import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./Redux/ducks/counter";
import "./style.css";
const Counter = ({ name }) => {
  const [votes, setvotess] = useState(0);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
    setvotess(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setvotess(votes - 1);
  };
  return (
    <div className="card">
      <h2> {name} </h2>
      <h3> {`Votess: ${votes}`} </h3>
      <div className="Buttons">
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
