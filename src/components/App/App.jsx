import React from "react";
import { store } from "../../store/store";
import { Search, Content } from "..";

export const App = () => {
  console.log(store.getState());

  return (
    <div>
      <Search />
      <Content />
    </div>
  );
};
