import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const cart = useSelector((state)=>state.cart);
  const dispatch = useDispatch();
  const addItem = ()=>{

    dispatch(add(post));
    toast.success("Item added to Cart")
  }

  function removeItem(){

    dispatch(remove(post.id));
     toast.error("Item removed from Cart");
  }


  return (
    <div className="flex hover:bg-blue-800 flex-col justify-between items-center rounded-xl  gap-3 p-4 mt-10 ml-5 mb-6 hover:scale-110 transition-all duration-300 ease-in shadow-2xl">
      <div>
        <p className="text-green-700  font-semibold text-lg truncate w-48 mt-1">{post.title}</p>
      </div>
      <div>
        <p className=" text-sm text-center mt-1 text-gray-400 w-48 capitalize">{post.description.split(" ").splice(0,15).join(" ")+"..."}</p>
      </div>
      <div className=" " >
        <img  src={post.image} alt="img" className="h-[180px]" />
      </div>
      <div className="flex w-full mt-5  justify-between">
      <div>
        <p className="text-green-600 font-semibold text-[1.2rem] mt-1">${post.price}</p>
      </div>

      {
        // Cp = cart Product
        cart.some((cp)=>cp.id===post.id) ?
        (
          <button className=" border b rounded-md px-2 border-gray-800 uppercase outline-1 text-black font-semibold hover:bg-red-700 hover:text-white"
          onClick={removeItem}>
            Remove Item
          </button>
        ):
        (
          <button className=" border border-gray-800 rounded-md px-2 py-1 uppercase outline-4  text-black hover:bg-red-700 hover:text-white transition-all duration-200"
          onClick={addItem}>
            Add to Cart
          </button>

        )


      }
      </div>
   
      
      
    </div>
  );
};

export default Product;
