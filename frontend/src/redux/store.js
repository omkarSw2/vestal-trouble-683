import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./UserAuth/reducer";

const rootReducer = combineReducers({ authReducer });
const middleware = [thunk];

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
