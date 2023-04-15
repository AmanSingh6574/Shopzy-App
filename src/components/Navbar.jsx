import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsShop } from "react-icons/bs";
function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="flex justify-around items-center bg-gray-900 h-16 text-white">
      <NavLink to="/" className="flex items-center sm:gap-2">
        <BsShop className="md:h-10 md:w-20 h-5 w-10" />
        <h1 className="home-title md:text-[30px]">Shopzy</h1>
      </NavLink>

      <div className="flex sm:gap-4 gap-2 md:text-[20px] font-serif">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/Cart"
          className="flex sm:gap-2 gap-1 items-center relative"
        >
          <p>Cart</p>
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 text-white bg-green-600 text-xs h-5 flex justify-center items-center animate-bounce rounded-full w-5">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
