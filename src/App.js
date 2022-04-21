import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Pages/Home/Home";
import "./App.css"

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Home />
      
      </div>
      
    </div>
  );
}

export default App;
