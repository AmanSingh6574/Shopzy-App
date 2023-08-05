import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Product from "../components/Product.jsx";
import Spinner from "../components/Spinner.jsx";

function Dispaly() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState([]);
    const [categoryVal, setCategoryVal] = useState("");

    const API_URL = "https://fakestoreapi.com/products";

    async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setData(data);
            setCategory([...new Set(data.map((item) => item.category))]);
        } catch (error) {
            toast.error("Error in Fetching the data");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase());
    };

    const filteredData = data.filter(
        (item) =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
    );

    const filterDataonCategory = data.filter((item) =>
        item.category.includes(categoryVal)
    );

    const combinedFilteredData = filteredData.length > 0
        ? filteredData.filter((item) => filterDataonCategory.includes(item))
        : filterDataonCategory;

    function optionHandler(e) {
        setCategoryVal(e.target.value);
    }

    return (
        <div className="pt-10 p-2 ">
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <Spinner />
                </div>
            ) : data.length > 0 ? (
                <div className="">
                    <div className="flex flex-wrap gap-4">
                        <div className="flex mx-auto justify-center flex-wrap gap-2 items-center">
                            <h2 className="text-lg font-semibold">Search Your Product</h2>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={handleSearch}
                                className="p-1 border border-gray-900 rounded-md relative"
                            />
                        </div>
                        <div className="flex mx-auto justify-center mb-4 flex-wrap gap-2 items-center">
                            <label className="text-lg font-semibold" htmlFor="category">Choose a category:</label>
                            <select
                                name="category"
                                id="category"
                                className="p-1 border border-gray-900 rounded-md relative"
                                onChange={optionHandler}
                            >
                                <option value="">Select Category ..</option>
                                {category.map((item, index) => (
                                    <option className="p-1 border border-gray-900 rounded-md relative" key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid shadow-xl mt-4 max-h-[700px] overflow-y-scroll grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl p-2 mx-auto mb-10">
                        {combinedFilteredData.length > 0 ? (
                            combinedFilteredData.map((product) => (
                                <Product product={product} key={product.id} />
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full h-32">
                                <p>No Data Found</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <p>No Data Found</p>
                </div>
            )}
        </div>
    );
}

export default Dispaly;
