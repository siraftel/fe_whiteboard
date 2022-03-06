import "./App.css";
// import Modals from "./Components/Modals/Modals";
// import TodoList from "../src/Components/Assets/Todo";
import SidebarStatic from "../src/Components/ShareComponent/Sidebar/SidebarStatic";
// import Task from "../src/Pages/Task";
import { Routes, Route } from "react-router-dom";
import TeamsBoards from "./Pages/Teams Board/Teams Boards";
import TeamsDetail from "./Pages/Team Detail/Teams Detail";
import ErrorPage from "./Pages/Error/Error";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Modals from "./Components/Modals/Modals";
import TeamsBoardsEmptyState from "./Pages/Teams Board/TeamsBoardsEmptyState";
import TeamsDetailEmptyState from "./Pages/Team Detail/TeamsDetailEmptyState";
// import { ProtectedRoute } from "./Components/Route/ProtectedRoute";
// import Modals from "./Components/Modals/Modals";
import TodoList from "../src/Components/Assets/Todo";
// import Sidebar from "../src/Components/ShareComponent/Sidebar/Sidebar";
import Task from "../src/Pages/Home/Task";
import Boards from "../src/Pages/Home/Boards";
import Account from "../src/Pages/Profile/Account";
// import Homepage from "../src/Pages/Homepage";
// import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register/Register";
import Home from "../src/Pages/Home/Home";
import Card from "../src/Components/ShareComponent/Navbar/Card";

function App() {
  return (
    <>
      <Routes>
        <Route path="team/:teamId" element={<TeamsBoards />}>
          <Route path="board/:boardId" element={<TeamsDetail />} />
        </Route>
        <Route exact path="/" element={<Homepage />} />
        <Route path="teams-boards" element={<TeamsBoards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/teams-boards-empty" element={<TeamsBoardsEmptyState />} />
        <Route path="/teams-detail-empty" element={<TeamsDetailEmptyState />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="tasks" element={<Task />} />
        <Route path="boards" element={<Boards />} />
        <Route path="todoList" element={<TodoList />} />
        <Route path="sidebarStatic" element={<SidebarStatic />} />
        <Route path="profil" element={<Account />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="profile" element={<Account />} />
        <Route path="card" element={<Card />} />

        {/* PROTECTED ROUTE PERSIST GATE (JATAH HAMDANI) */}
        {/*<Route
          path="/test"
          element={
            <ProtectedRoute redirectTo="/register">
              File/ Location yang di lindungi
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </>
  );
}
export default App;
