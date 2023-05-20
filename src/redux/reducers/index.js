import { combineReducers } from "redux";
import main from "./main";
import { RESET, SAVE_ITEM } from "../actionTypes";
import storage from "redux-persist/lib/storage";

// only using one but setup so more can be added in future
const appReducer = combineReducers({ main: main });

export const rootReducer = (state, action) => {
  switch (action.type) {
    case RESET:
      storage.removeItem("persist:root");
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};
