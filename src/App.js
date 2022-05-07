import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
      <Sidebar/>
       <Home/>
      </div>
    </div>
  );
}

export default App;
