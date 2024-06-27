import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import "./index.css"

const App = () => {
  return (<div>
  <div className=" bg-blue-900 lg:w-full sm:w-[75rem] change">
    <Navbar/>
  </div>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Cart" element={<Cart/>} />
  </Routes>
       
  </div>)
};

export default App;
