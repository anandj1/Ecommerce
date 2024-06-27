import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => { 
  const cart= useSelector((state)=>state.cart)
  console.log(cart)
  const[TotalAmount,SetTotalAmount] = useState(0);
  useEffect(()=>{
    SetTotalAmount(cart.reduce((prev,curr)=>(prev+curr.price),0));
  },[cart])
  function ClickHandler(){

  }

  return(
    <div>
      {
        cart && cart.length >0  ?
        (<div className="flex max-w-7xl gap-x-24 mb-5 ">
        <div className="flex flex-col  ">
        {
          cart.map((item,index)=>{
            return <CartItem  key ={item.id} item ={item} itemIndex = {index}/>
          })
        }
        </div>


        <div className="flex flex-col mb-4 justify-between">
         <div className="flex flex-col  ">

          <div className=" uppercase  font-semibold text-[2rem] mt-20 -mb-2 text-green-800">Your Cart</div>
          <div  className="uppercase font-bold text-[3rem]   text-green-800 "> Summary </div>
          <p><span className=" capitalize  font-semibold ">Total Items : {cart.length}</span></p>
          </div>
          <div>

          <p className=" capitalize font-black text-[0.9rem]"> Total Amount is : <span className="font-bold text-[1rem] text-black"> ${TotalAmount} </span></p>
          <button className=" mt-4 border font-bold rounded-md text-white w-full capitalize font-xl  p-3 bg-green-800 " onClick={ClickHandler()}>
            CheckOut Now
          </button>



          </div>
          
        </div>

        </div>

        ):
        (
          <div className=" flex flex-col justify-center items-center min-h-screen">
            <h1 className=" text-blue-900 font-bold text-2xl">Your Cart is Empty</h1>
            <NavLink to= {"/"}>
            <button className="w-[12rem] mt-10 border rounded-full py-3 bg-green-700">
              Shop Now
            </button>
            </NavLink>
          </div>

        )
      }
    </div>
  )
 

};

export default Cart;
