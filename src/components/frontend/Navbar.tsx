import { useAppSelector } from "@/redux/hooks";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineShopping, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
interface PropsType {
  setShowCart: Dispatch<SetStateAction<boolean>>;
}
const Navbar: React.FC<PropsType> = ({ setShowCart }) => {
  const cartCount = useAppSelector((state) => state.cardReducer.length);
  return (
    <div className="pt-4 bg-white top--0 sticky">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="text-4xl"><img src="./logo.png" width={50} alt="logo"/>Empire</div>
          <div className="hidden lg:flex w-full max-w-[500px]">
            <input
              className="border-2 border-accent px-6 py-2 w-full"
              type="text"
              placeholder="Search for products...."
            />
            <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center"></div>
          <div className="md:flex hidden gap-3">
            <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
              <AiOutlineUser />
            </div>
            <div>
              <p className="text-gray-500">Hello,Sign In</p>
              <p className="font-semibold">Your Account</p>
            </div>
          </div>
          <div className="text-gray-500 text-[32px] relative cursor-pointer"
          onClick={()=>setShowCart(true)}
          >
            <AiOutlineShoppingCart/>
            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
              {cartCount}
            </div>
          </div>
        </div>
        <hr className="my-2"></hr>
      </div>
    </div>
  );
};

export default Navbar;
