import { combineReducers } from "redux";

//Import reducernya disini
import { teamReducer } from "./Team Reducer";
import { boardReducer } from "./Board Reducer";

const reducers = combineReducers({
  //Masukan Reducer yang telah diimport kesini
  teamReducer,
  boardReducer,
});

export default reducers;
