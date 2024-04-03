import React, { useContext } from "react";
import { Ramecontext } from "./Parentt";

function Grandchild() {
  const vajiko = useContext(Ramecontext);

  return (
    <div style={{ height:"200px", border:"2px solid orange"}}>
      <button
        onClick={() => {
          vajiko.setName("topevarbrat");
        }}
      >
        Change
      </button>
      <input type="text" onChange={(e) => vajiko.setName(e.target.value)} />
    </div>
  );
}

export default Grandchild;
