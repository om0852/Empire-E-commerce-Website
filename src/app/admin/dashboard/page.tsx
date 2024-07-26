"use client"

import Popup from '@/components/admin_panel/Popup';
import ProductRow from '@/components/admin_panel/ProductRow';
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SiAxios } from 'react-icons/si';
export interface IProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const dispatch = useAppDispatch();
useEffect(()=>{
},[updateTable])
  useEffect(() => {
    dispatch(setLoading(true));
    axios.get("/api/get_products").then((res) => setProducts(res.data)).catch(err => console.log(err)).finally(() => dispatch(setLoading(false)));
  }, [])
  return (
    <>
      <div className='bg-white h-[calc(100vh-96px)] rounded-lg p-4'>
        <h2 className='text-3xl'>All products</h2>
        <div className='mt-4 h-calc(100vh-180px)] overflow-y-auto'></div>
        <table className='w-full '>
          <thead>
            <tr className='text-gray-500 border-t border-[#ececec]'>
              <th>SR No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: IProduct, index) => {
              console.log(product)
              return(
              <ProductRow key={product._id}
                srNo={index + 1}
                setOpenPopup={setOpenPopup}
                setUpdateTable={setUpdateTable}
                product={product}
              />
            )})}
          </tbody>

        </table>
        {openPopup && (
          <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable}/>
        )}
      </div>
    </>

  )
}

export default Dashboard