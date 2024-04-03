import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../data";

function Post() {
  const params = useParams();

  const newData = users.find((el) => el.id === Number(params.id));

  return (
    <div>
      <h1>{newData.name}</h1>
      <h1>{newData.lastname}</h1>
      <h1>{newData.address}</h1>
    </div>
  );
}

export default Post;
