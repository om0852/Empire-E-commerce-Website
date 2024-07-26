import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import axios from 'axios';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import toast from 'react-hot-toast';
import { IoIosCloseCircleOutline } from 'react-icons/io';
interface PropsType{
    setOpenPopup:Dispatch<SetStateAction<boolean>>;
    setUpdateTable:Dispatch<SetStateAction<boolean>>;
}
const Popup:React.FC<PropsType> = ({setOpenPopup,setUpdateTable}) => {
    const productData=useAppSelector((state)=>state.productReducer);
    const dispatch = useAppDispatch();

    const [inputData,setInputData]=useState({
        name:productData.name,
        price:productData.price,
        category:productData.category,
    })

    const handleSubmit=(e:FormEvent)=>{
        console.log(productData)
        e.preventDefault();
        dispatch(setLoading(true));
        axios.put(`${process.env.NEXT_PUBLIC_URL}/api/edit_product/${productData._id}`,inputData).then(res=>{makeToast("Product Update Sucessfully");setUpdateTable(prev=>!prev)}).catch(error=>toast.error("Something Went Wrong")).finally(()=>{dispatch(setLoading(false));setOpenPopup(false)})

    }
  return (
    <div>
        <div className='fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center'>
            <div className='bg-white w-[700px] py-8 rounded-lg text-center relative'>
                <IoIosCloseCircleOutline className='absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-600  ' onClick={()=>setOpenPopup(false)}/>
                    <h2 className='text-2xl -mt-3'>Edit product</h2>
                    <form className='mt-6 w-fit space-y-4 mx-auto' onSubmit={handleSubmit}>
                        <input
                        className='border block border-gray-500  outline-none px-4 py-2 rounded-lg w-fit'
                        type="text"
                        placeholder='Name'
                        value={inputData.name}
                        onChange={(e)=>
                            setInputData({...inputData,name:e.target.value})
                        }
                        required
                        />
                        <input
                        className='border block border-gray-500  outline-none px-4 py-2 rounded-lg w-fit'
                        type="text"
                        placeholder='Category'
                        value={inputData.category}
                        onChange={(e)=>
                            setInputData({...inputData,category:e.target.value})
                        }
                        required
                        />
                        <input
                        className='border block border-gray-500  outline-none px-4 py-2 rounded-lg w-fit'
                        type="text"
                        placeholder='Price'
                        value={inputData.price}
                        onChange={(e)=>
                            setInputData({...inputData,price:e.target.value})
                        }
                        required
                        />
                        <div className='flex justify-end'>
                            <button className='bg-accent block text-white px-8 py-2 rounded-lg self-center'>Save</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Popup