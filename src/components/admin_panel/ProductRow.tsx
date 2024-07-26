import { IProduct } from "@/app/admin/dashboard/page";
import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
interface PropsType {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: IProduct;
}

const ProductRow: React.FC<PropsType> = ({
  product,
  setOpenPopup,
  setUpdateTable,
  srNo,
}) => {
  const dispatch = useAppDispatch();

  const onEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };

  const onDelete = () => {
    dispatch(setLoading(true));
         axios
          .delete(
            `${process.env.NEXT_PUBLIC_URL}/api/delete_product/${product._id}`
          )
          .then((res) => {
            makeToast("Product Deleted Sucessfully");
            setUpdateTable(prev=>!prev);
            dispatch(setProduct(product))
          })
          .catch((error) => console.log(error)).finally(()=>dispatch(setLoading(false)));
  };

  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{product.name}</div>
      </td>
      <td>
        <div>${product.price}</div>
      </td>
      <td>
        <div className="py-2">
          <Image
            src={product.imgSrc}
            width={40}
            height={40}
            alt="product image"
          />
        </div>
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={onEdit}
          />
          <RiDeleteBin5Line
            className="text-[20px] cursor-pointer hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
