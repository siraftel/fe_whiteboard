import "./App.css";
import { Routes, Route } from "react-router-dom";

import TeamsBoards from "./Pages/Teams Boards";
import TeamsDetail from "./Pages/Teams Detail";
import ErrorPage from "./Pages/Error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TeamsBoards />} />
        <Route path="/teams-detail" element={<TeamsDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
