import React, { useContext } from "react";
import { Ramecontext } from "./Parentt";

const qetaorbeladze = useContext(Ramecontext);
function Childd() {
  return (
    <div style={{ height: "200px", border: "2px solid blue" }}>
      <h1>Esaa Childi</h1>
    </div>
  );
}

export default Childd;
