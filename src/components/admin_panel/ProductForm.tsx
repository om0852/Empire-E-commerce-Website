"use client";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
interface IPayload {
  imgSrc: null | string;
  fileKey: null | string;
  name: string;
  category: string;
  price: string;
}
const ProductForm = () => {
  const [payload, setPayLoad] = useState<IPayload>({
    imgSrc: null,
    fileKey: null,
    name: "",
    category: "",
    price: "",
  });

  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/add_product`, payload)
      .then((res) => {
        makeToast("Product Added Successfully");
        setPayLoad({
          imgSrc: null,
          fileKey: null,
          name: "",
          category: "",
          price: "",
        });
      })
      .catch((error) => {
        toast.error("something went wrong");
      })
      .finally(() => dispatch(setLoading(false)));
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Image
        width={800}
        height={500}
        className="max-h-[300px] w-auto object-contain rounded-md"
        src={payload.imgSrc ? payload.imgSrc : "/logo.png"}
        alt="s"
      />
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setPayLoad({...payload,imgSrc:res[0].url,fileKey:res[0].key})
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <div>
        <label className="block ml-1" htmlFor="name">
          Product Name
        </label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
          type="text"
          value={payload.name}
          onChange={(e) => setPayLoad({ ...payload, name: e.target.value })}
          required
        />
        <label className="block ml-1" htmlFor="name">
          Product Price
        </label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
          type="text"
          value={payload.price}
          onChange={(e) => setPayLoad({ ...payload, price: e.target.value })}
          required
        />
        <label className="block ml-1" htmlFor="name">
          Product Category
        </label>
        <input
          className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
          type="text"
          value={payload.category}
          onChange={(e) => setPayLoad({ ...payload, category: e.target.value })}
          required
        />
      </div>
      <div className="flex justify-end"><button className="bg-pink text-white px-8 py-2 rounded-md">Add</button></div>
    </form>
  );
};

export default ProductForm;
