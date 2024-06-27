import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import "../index.css"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])

  return (
    <div>
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="background grid  xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-7xl  p-2 mb-5 mx-auto space-y-10  space-x-8 min-h-[90vh]">{
        posts.map((post)=>{
          return (
            <Product key={post.id} post={post}/>
          )
        })
        }
          
        </div>) :
        <div>
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;
