import "./App.css";
import { Routes, Route } from "react-router-dom";

import TeamsBoards from "./Pages/Teams Boards";
import TeamsDetail from "./Pages/Teams Detail";
import ErrorPage from "./Pages/Error/Error";
import Homepage from "../src/Pages/Homepage";
import Login from "./Pages/Login";
import Modals from "./Components/Modals/Modals";
import TeamsBoardsEmptyState from "./Pages/TeamsBoardsEmptyState";
import TeamsDetailEmptyState from "./Pages/TeamsDetailEmptyState";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
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
