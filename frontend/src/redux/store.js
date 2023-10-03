import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or any other storage
import { reducer as authReducer } from "./UserAuth/reducer";

// Combine your reducers
const rootReducer = combineReducers({
  authReducer, // You can add other reducers here if you have more
});

// Configure persist options
const persistConfig = {
  key: "root",
  storage,
  debug: true,

};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Apply thunk middleware
const middleware = [thunk];

// Create the Redux store with persisted reducer and middleware
export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

// Create the persisted store
export const persistor = persistStore(store);
