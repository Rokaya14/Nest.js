import React, { useState } from "react";

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2> {name} </h2>
      <h3> {`Counter: ${count}`} </h3>
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
