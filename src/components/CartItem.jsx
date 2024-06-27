import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch()

  const removefromCart =()=>{
    dispatch(remove(item.id));
    toast.error("Item removed")

  }

  return (
    <div className=" mt-4 border-b border-blue-950 p-3 gap-20 mx-auto flex justify-center items-center lg:ml-[19rem] sm:ml-0    ">

    

      <div className="w-[180px] ">
        <img src={item.image} className="w-full h-full p-1"  alt="mage"/>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-8">
      
        <h1 className=" text-blue-800  font-bold text-xl">{item.title}</h1>
        <h1 className=" text-gray-600 w-[80%]">{item.description.split(" ").splice(0,15).join(" ")+"..."}</h1>
        <div className="flex justify-between">
          <p className=" font-bold text-green-500 text-xl ">${item.price}</p>

          <div>
        <button className=" " onClick={removefromCart}><span className="absolute bg-red-300  p-3 -mt-8 hover:bg-red-700 rounded-full"><RiDeleteBin5Fill /></span></button>
        

        </div>
        </div>
       
       

      

      </div>

      
     
   

    </div>




  )
  
};

export default CartItem;
