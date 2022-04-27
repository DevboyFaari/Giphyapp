import { createStore } from "redux";
import rootReducers from "./reducer/inject";

const store = createStore(rootReducers);

export default store;
