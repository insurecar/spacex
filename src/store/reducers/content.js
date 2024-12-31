import { getItemCreator } from "../actions/getQuery";

const initialState = {
  content: [],
};

export const contentReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case getItemCreator:
      return { content: actions.data };
    default:
      return state;
  }
};
