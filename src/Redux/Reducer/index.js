import { combineReducers } from "redux";

//Import reducernya disini
import { getTeamReducer } from "./Team Reducer";

const reducers = combineReducers({
  //Masukan Reducer yang telah diimport kesini
  getTeamReducer,
});

export default reducers;
