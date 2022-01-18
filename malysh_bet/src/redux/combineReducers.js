import { combineReducers } from "redux";
import { reducerRides } from "../redux/reduserRides";

export const rootReducers = combineReducers({
  rides: reducerRides,
});
