import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

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
  };

  return (
    <div style={styles.container}>
      <div style={styles.count}>{count}</div>
      <div>
        <button style={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonDecrement }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
