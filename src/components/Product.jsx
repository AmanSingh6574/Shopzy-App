import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice.jsx";
import { Link } from "react-router-dom";

function Product({ product }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(cart)
  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item added succefully");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item removed");
  };


  return (
    <div >
      <div
        className="flex flex-col items-center justify-between 
    hover:scale-105 bg-white transition duration-300 ease-in gap-3 p-4 mt-10 mb-10 ml-5 rounded-xl hover:shadow-2xl shadow-xl min-h-[65vh]"
      >
        <div className="text-gray-700 font-semibold text-left flex flex-wrap w-40 mt-1">
          <p>{product.title.split(" ").slice(0, 10).join(" ") + "..."}</p>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[15px] text-left">
            {product.description.split(" ").slice(0, 10).join(" ").trim() + "..."}
          </p>
        </div>
        <Link to={`/ProductDescription/${product?.id}`} className="h-[180px]">
          <img src={product.image} alt="not found" className="h-full w-full " />
        </Link>
        <div className="flex justify-between gap-12 items-center w-full mt-5">
          <div>
            <p className="text-green-600 font-semibold">${product.price}</p>
          </div>

          {cart.some((value) => value.id === product.id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:text-white hover:bg-black transition-all duration-300 "
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:text-white hover:bg-black transition-all duration-300"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
