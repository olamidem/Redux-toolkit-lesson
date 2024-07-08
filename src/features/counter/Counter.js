import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, increaseByNumber } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0",
    },
    count: {
      fontSize: "80px",
      margin: "20px 0",
      color: "#333",
    },
    button: {
      padding: "20px",
      margin: "10px",
      fontSize: "20px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      outline: "none",
    },
    buttonDecrement: {
      backgroundColor: "#FF4136",
    },
    input: {
      padding: "10px",
      margin: "20px 0",
      fontSize: "18px",
      width: "200px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      textAlign: "center",
    },
  };

  const [increaseBy, setIncreaseBy] = useState(0);
  const addValue = Number(increaseBy) || 0;
  const handleChange = (e) => {
    setIncreaseBy(e.target.value);
  };

  const handleRestAll = () => {
    setIncreaseBy(0);
    dispatch(reset());
  };

  const handleInceaseBy = () => {
    dispatch(increaseByNumber(addValue));
  };

  return (
    <div style={styles.container}>
      <div style={styles.count}>{count}</div>

      <input
        type="text"
        value={increaseBy}
        onChange={handleChange}
        style={styles.input}
      />

      <div>
        <button style={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
        <button style={styles.button} onClick={handleInceaseBy}>
          Increase By
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonDecrement }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonDecrement }}
          onClick={handleRestAll}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
