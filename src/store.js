import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import flightReducer from "./reducers/flight.reducer";

const reducer = combineReducers({
  flight: flightReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
