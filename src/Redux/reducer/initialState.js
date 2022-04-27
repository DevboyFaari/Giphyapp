// import { CHANGE_SEARCH_FIELD } from "../store";

const cart = [];

export const initialState = (state = cart, action = {}) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return { ...state, giphs: action.payload };
    default:
      return state;
  }
};
