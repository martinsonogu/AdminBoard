import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Pages/Home/Home";
import "./App.css"
import UserList from "./Components/Pages/UserList/UserList";
import User from "./Components/Pages/User/User"

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route path="/users" element = {<UserList />}/>
        <Route path="/user/:userId" element = {<User />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
