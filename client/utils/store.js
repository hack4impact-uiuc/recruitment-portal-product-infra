import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import rootReducer from "../reducers"
import {initialState} from "./initialState"

export const initStore = (state = initialState) => {
  return createStore(
    rootReducer,
    state.initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
