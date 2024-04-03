import React, { useRef, useState } from "react";

function Divback() {
  const handleClick = () => {
    divRef.current.style.backgroundColor = "blue";
    divRef.current.style.width = "400px";
    divRef.current.style.height = "400px";
  };

  const divRef = useRef(null);

  return (
    <div>
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
        ref={divRef}
      ></div>
      <button onClick={handleClick}>change size and color</button>
    </div>
  );
}

export default Divback;
