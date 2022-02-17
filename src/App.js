import "./App.css";
import { Routes, Route } from "react-router-dom";

import TeamsBoards from "./Pages/Teams Board/Teams Boards";
import TeamsDetail from "./Pages/Team Detail/Teams Detail";
import ErrorPage from "./Pages/Error/Error";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Modals from "./Components/Modals/Modals";
import TeamsBoardsEmptyState from "./Pages/Teams Board/TeamsBoardsEmptyState";
import TeamsDetailEmptyState from "./Pages/Team Detail/TeamsDetailEmptyState";
// import Modals from "./Components/Modals/Modals";
// import TodoList from "../src/Components/Assets/Todo";
// import Sidebar from "../src/Components/ShareComponent/Sidebar/Sidebar";
// import Task from "../src/Pages/Task";
// import Boards from "../src/Pages/Boards";
// import Account from "../src/Pages/Account";
// import Homepage from "../src/Pages/Homepage";
// import Login from "../src/Pages/Login";
// import Register from "../src/Pages/Register";
// import Home from "../src/Pages/Home";S
// import Card from "../src/Components/ShareComponent/Navbar/Card";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/teams-boards" element={<TeamsBoards />} />
        <Route path="/teams-boards-empty" element={<TeamsBoardsEmptyState />} />
        <Route path="/teams-detail" element={<TeamsDetail />} />
        <Route path="/teams-detail-empty" element={<TeamsDetailEmptyState />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
