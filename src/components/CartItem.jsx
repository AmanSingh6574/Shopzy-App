import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice.jsx";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div>
      <div className="flex gap-4 p-3  shadow-xl mb-10 justify-center items-center flex-wrap space-y-10 ">
        <div className="w-[150px] ">
          <img src={item.image} height="full" width="full" loading="lazy" alt="not found" />
        </div>

        <div className="flex flex-col gap-4 w-[300px]  p-2 px-3">
          <h1 className="text-gray-700 font-semibold text-lg mt-1">
            {item.title}
          </h1>
          <h1 className="w-full text-gray-400 font-normal text-[15px] ">
            {item.description}
          </h1>

          <div className="flex justify-between mr-4 mb-4">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
              className="w-6 flex justify-center items-center rounded-full bg-pink-300"
              onClick={removeFromCart}
            >
              <FcDeleteDatabase loading="lazy" className="text-pink-900 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
