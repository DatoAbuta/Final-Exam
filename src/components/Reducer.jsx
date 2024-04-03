import React, { useReducer } from "react";

const initialValue = {
  count: 0,
};

export default function Reducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);


  return <div>
    <h1>{state.count}</h1>
    <button onClick={() => dispatch({type: "INCREMENT"})}>increment</button>
    <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
    <button onClick={() => dispatch({type: "RESET"})}>reset</button>
  </div>;
}
