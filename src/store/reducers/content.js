import { getItemCreator } from "../actions/getQuery";

const initialState = {
  content: [],
};

export const contentReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case getItemCreator:
      console.log("++++++___________", actions.content);

      return { content: actions.content };
    default:
      return state;
  }
};
