import React from "react";
import useFetchi from "./useFetchi";

export default function Gela() {
  const { data } = useFetchi("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data.map((el) => (
        <div key={el.id}>
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
}
