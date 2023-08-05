import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsShop } from "react-icons/bs";

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="flex flex-row justify-around items-center h-16 md:py-2">
     <div>
     <NavLink to="/" className="flex items-center gap-2">
        <BsShop size={25} />
        <h1 className="text-2xl md:text-3xl font-semibold font-serif">Shopzy</h1>
      </NavLink>
     </div>

      <div className="flex gap-4 md:gap-4 md:text-xl text-lg font-serif mt-2 md:mt-0">
        <NavLink to="/" className="nav-link">
          <p className=" hover:scale-105 transition-all duration-200 hover:font-semibold ">Home</p>
        </NavLink>
        <NavLink to="/Cart" className="nav-link flex gap-1 items-center relative">
          <p className=" hover:scale-105 transition-all duration-200 hover:font-semibold ">Cart</p>
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 text-white bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
