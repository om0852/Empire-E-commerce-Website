import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";
import toast from "react-hot-toast";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
interface IProduct {
  id: string;
  img: string;
  name: string;
  category: string;
  price: number;
}
const ProductCard: React.FC<IProduct> = ({
  id,
  img,
  price,
  name,
  category,
}) => {
  const dispatch = useAppDispatch();
  const addProductToCart = () => {
    const payload = {
      id,
      img,
      name,
      price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
    toast.success("Added To Cart");
  };
  return (
    <div className="border border-gray-200">
      <div className="text-center border-b border-gray-200">
        <img className="inline-block w-auto h-[300px]"   src={img} alt={name} />
      </div>
      <div className="px-8 py-4">
        <p className="text-gray-500">{category}</p>
        <h2 className="font-medium">{name}</h2>
        <div className="mt-3 flex text-[#FFB21D] items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-accent text-xl">${price}</h2>
          <div
            className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent"
            onClick={addProductToCart}
          >
            <AiOutlineShoppingCart />
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
