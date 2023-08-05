import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { add, remove } from "../redux/Slices/CartSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

function ProductDescription() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);

  const API_URL = "https://fakestoreapi.com/products";

  async function fetchData() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data);
    } catch (error) {
      toast.error("Error in Fetching the data");
    }
  }

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, data]);

  const handleAddToCart = () => {
    dispatch(add(product));
    toast.success("Item added to cart successfully");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="min-h-screen  bg-orange-50">
      <div className="flex flex-col items-center justify-center ">
        {product && (
          <div className="max-w-3xl mt-10 mb-10 bg-white shadow-lg rounded-lg p-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-[200px] mx-auto h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-green-600 font-semibold">${product.price}</p>
              <div className="flex items-center">
                <span className="text-yellow-500 font-semibold">
                  {product.rating.rate}
                </span>
                <span className="text-gray-600 ml-1">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>
            <p className="text-gray-600 mt-4">Category: {product.category}</p>
            {cart.some((value) => value.id === product.id) ? (
              <button
                className="mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded"
                onClick={removeFromCart}
              >
                Remove Item
              </button>
            ) : (
              <button
                className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDescription;
