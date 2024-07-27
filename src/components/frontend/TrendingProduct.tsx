import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  category: string;
  price: number;
}
const TrendingProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/get_products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="conatiner mt-32">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-4xl font-medium">Trending Products</h2>
        <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
          <div className="text-black">New</div>
          <div>Featured</div>
          <div>Top Seller</div>
        </div>
      </div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sl:grid-cols-4 mt-8">
    {products.map((item:IProduct)=>{
        return(
            <ProductCard
            key={item._id}
            id={item._id}
            img={item.imgSrc}
            category={item.category}
            name={item.name}
            price={item.price}
            />
        )
    })}
</div>
    </div>
  );
};

export default TrendingProduct;
