import React from "react";
import Divback from "./Divback";
import NameComp from "./NameComp";
import Showhide from "./Showhide";
import Timer from "./Timer";
import { users } from "../data";
import Parent from "./Parent";
import { Link } from "react-router-dom";
import Parentt from "./Parentt";
import Gela from "./Gela";
import Reducer from "./Reducer";
import Todos from "./Todos";

function Home() {
  return (
    <div>
      {/* <NameComp name={"Btn Davit"}/> */}
      {/* <Showhide /> */}
      {/* <Divback/> */}
      {/* <Timer /> */}
      {/* <Parent /> */}

      {/* {users.map((el) => (
        <div key={el.id}>
          <Link to={`/${el.id}`}>{el.name}</Link>
        </div>
      ))} */}

      {/* <Parentt /> */}

      {/* <Gela /> */}

      {/* <Reducer /> */}

      <Todos />
    </div>
  );
}

export default Home;
