import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product List Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((prod) => (
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
    </div>
  );
};

export default ProductList;
