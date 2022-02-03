import "./App.css";
import Sidebar from "../src/Components/ShareComponent/Sidebar/Sidebar";
import TeamsBoards from "./Pages/Teams Boards";
// import UserNavbar from "./Components/Navbar/NavbarIsLogin";

function App() {
  return (
    <>
      {/* <UserNavbar /> */}
      <TeamsBoards />
      <Sidebar />
    </>
  );
}

export default App;
