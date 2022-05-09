import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
