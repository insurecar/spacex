import { getQueryCreator, visitedQueryCreator } from "../actions/getQuery";

const initialState = {
  history: [],
};

export const listOfHistoryReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case getQueryCreator:
      return {
        history: actions.data.data,
      };
    case visitedQueryCreator:
      return {
        message: actions.message,
      };
    default:
      return state;
  }
};
