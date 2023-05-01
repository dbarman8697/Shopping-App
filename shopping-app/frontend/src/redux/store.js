import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as addReducer } from "./addReducer/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  addReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
