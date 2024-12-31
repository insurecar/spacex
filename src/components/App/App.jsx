import React from "react";
import { store } from "../../store/store";
import { Search, Content } from "..";

export const App = () => {
  console.log(
    "%c I understand that this is not the best performance.😊",
    "background: coral; padding: 30px; border-radius:15px; color: white; font-size:20px"
  );

  console.log(
    "%c But I tried to cover all the cases.😊",
    "background: lightgreen; padding: 30px; border-radius:15px; color: white; font-size:20px"
  );

  console.log(
    "%c and show what knowledge I have.😊",
    "background: orange; padding: 30px; border-radius:15px; color: white; font-size:20px"
  );
  return (
    <div>
      <Search />
      <Content />
    </div>
  );
};
