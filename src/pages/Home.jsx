import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Product from "../components/Product.jsx";
import Spinner from "../components/Spinner.jsx";

function Home() {
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  const API_URL = "https://fakestoreapi.com/products";

  async function FetchData() {
    setloading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data);
    } catch (error) {
      toast.error("Error in Fetching the data");
    }
    setloading(false);
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : Data.length > 0 ? (
        <div className=" grid items-center justify-center xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-6 mb-10">
          {" "}
          {Data.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
