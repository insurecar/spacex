import { getQueryCreator } from "../actions/getQuery";

const initialState = {
  history: [],
};

export const listOfHistoryReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case getQueryCreator:
      return {
        history: actions.data.data,
      };
    default:
      console.log(1231);
      return state;
  }
};
