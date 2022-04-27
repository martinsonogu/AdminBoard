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
import User from "./Components/Pages/User/User";
import NewUser from "./Components/Pages/NewUserPage/NewUser"
import ProductList from "./Components/Pages/ProductList/ProductList";
import Product from "./Components/Pages/Product/Product";
import NewProduct from "./Components/Pages/NewProduct/NewProduct";
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
        <Route path="/newUser" element = {<NewUser />}/>
        <Route path="/products" element = {<ProductList />}/>
        <Route path="/product/:productsId" element = {<Product />}/>
        <Route path="/newProduct" element = {<NewProduct />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
