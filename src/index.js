import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
/* import rootReducer from "./store/reducers/rootReducer"; */
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";

/*  const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);  */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({})))
);

//
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//ReactDOM.render(<Elements stripe={stripePromise}><Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider></Elements>, document.getElementById("blinc"));
//serviceWorker.unregister();

serviceWorker.register();
