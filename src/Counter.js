import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux/ducks/counter";
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
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2> {name} </h2>
      <h3> {`Votess: ${votes}`} </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      >
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
