import React, { createContext, useState } from "react";
import Child from "./Child";
import Grandchild from "./Grandchild";

export const Ramecontext = createContext(null);

function Parentt() {
  const [name, setName] = useState("sagolsimon");

  return (
    <Ramecontext.Provider value={{ setName }}>
      <div style={{ height:"200px", border:"2px solid red"}}>
        <h1>{name}</h1>
      </div>
      <Child />
      <Grandchild />
    </Ramecontext.Provider>
  );
}

export default Parentt;
