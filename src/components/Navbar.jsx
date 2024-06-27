import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import "../index.css"

const Navbar = () => {
  const cart = useSelector((state)=>state.cart)
  return (
    <div className=" ">
    <nav className="   flex items-center h-20 lg:max-w-6xl justify-between lg:ml-44 sm:ml-0 ">
    <NavLink to= "/">

      <div className="ml-40" >
     <img src="../logo.png" alt="img"
      width="80px"
    />
      </div>
    </NavLink>
   
    <div className="flex items-center font-medium text-slate-300 lg:mr-36 sm:mr-[29rem] change2 space-x-7">
    <NavLink to="/">
    <p className="text-xl">Home </p>
    </NavLink>

    <NavLink to="/Cart">
      <div className="text-3xl">
      <BsFillCartFill />
      {
        cart.length >0 &&
        <span className="absolute top-7 ml-[0.4rem]  bg-green-600 text-sm w-5 h-5 flex justify-center items-center  animate-bounce  rounded-full text-white">{cart.length}</span>
      }
      
      </div>
    </NavLink>
</div>
    

    </nav>





    </div>


   
    
  )
};

export default Navbar;
