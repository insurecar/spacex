import React from "react";
import { store } from "../../store/store";
import { Search } from "..";

export const App = () => {
  console.log(store.getState());

  return (
    <div>
      <Search />
    </div>
  );
};
