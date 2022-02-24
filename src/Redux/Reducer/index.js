import { combineReducers } from "redux";

//Import reducernya disini
import { getTeamReducer } from "./Team Reducer";
import { getAuthRegister } from "./UserReducer";
const reducers = combineReducers({
  //Masukan Reducer yang telah diimport kesini
  getTeamReducer,
  getAuthRegister,
});

export default reducers;
