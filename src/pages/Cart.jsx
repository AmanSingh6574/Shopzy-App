import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount((cart.reduce((tot, curr) => tot + curr.price, 0)).toFixed(3));
  }, [cart]);

  return (
    <div className="w-11/12 flex justify-center items-center mx-auto">
      {cart.length > 0 ? (
        <div className="grid grid-col-1 bg-white rounded-3xl p-4 sm:grid-cols-2 mt-10 mb-10 justify-center mx-auto">
          <div className=" ">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col mt-10 mb-10 justify-between mx-10">
            <div className="flex flex-col ">
              <div className="uppercase font-bold text-[18px] text-green-700">
                Your Cart
              </div>
              <div className="uppercase font-extrabold text-[30px] text-green-700">
                Summary
              </div>
              <p className="mt-4">
                <span className="text-gray-700 text-[18px] font-semibold ">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="relative bottom-0 ">
              <p className="font-semibold mb-4 text-[20px] text-gray-800">
                Total Amount:<span className="font-bold"> ${totalAmount}</span>{" "}
              </p>
              <button className="w-full rounded-md text-white bg-green-600 p-2  font-bold ">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col font-semibold text-[25px] mt-[10%]">
          <h1 className="font-semibold text-[25px] text-gray-800 font-serif " >Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-400 rounded-2xl p-2 w-40 transition-all duration-200 hover:scale-110 shadow-2xl font-serif mt-6 hover:text-white" >Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
