import { combineReducers } from "redux";

import uiReducer from "./reducers/uiReducer";
import walletReducer from "./reducers/walletReducer";

const rootReducer = combineReducers({
  wallet: walletReducer,
  UI: uiReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
