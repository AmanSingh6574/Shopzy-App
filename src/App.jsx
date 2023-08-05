import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ProductDescription from "./pages/ProductDescription";
import Footer from "./pages/Footer";
const App = () => {
  return (<div>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/productDescription/:id" element={<ProductDescription/>} />
        </Routes>
        <Footer/>
        
  </div>)
};

export default App;
