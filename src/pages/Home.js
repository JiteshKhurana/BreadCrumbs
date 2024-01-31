import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const sliceTrending = data.products.slice(0, 8);
        setTrendingProducts(sliceTrending);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <h2 className="text-2xl font-semibold mb-2">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trendingProducts?.map((prod) => (
          <Link
            to={`/products/${prod.id}`}
            key={prod.id}
            className="block p-4 border rounded shadow"
          >
            <h2 className="text-lg font-semibold mb-2">{prod.title}</h2>
            <img
              className="h-48 w-full object-cover mb-2"
              src={prod.thumbnail}
              alt={prod.id}
            />
            <h2 className="text-lg font-semibold">$ {prod.price}</h2>
          </Link>
        ))}
      </div>
      <Link to="/products" className="block mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
