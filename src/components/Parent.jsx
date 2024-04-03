import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button onClick={() => setCount(count - 1)}>dec</button>

      <Child />
    </div>
  );
}

export default Parent;
