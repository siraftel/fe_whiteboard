import { combineReducers } from "redux";

//Import reducernya disini
import { teamReducer } from "./Team Reducer";
import { boardReducer } from "./Board Reducer";
import { getAuthRegister } from "./UserReducer";
import { getTasks } from "./TasksReducer";
import { getProfile } from "./ProfileReducer";

const reducers = combineReducers({
  //Masukan Reducer yang telah diimport kesini
  teamReducer,
  boardReducer,
  getAuthRegister,
  getTasks,
  getProfile,
});

export default reducers;
