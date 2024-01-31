import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Detail Page</h1>
      {product ? (
        <>
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <img
            className="h-48 w-full object-cover mb-2"
            src={product.thumbnail}
            alt={product.id}
          />
          <h2 className="text-2xl font-semibold">$ {product.price}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
