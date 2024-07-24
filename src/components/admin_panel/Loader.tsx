import React from 'react'
import "./admin_panel.css"
const Loader = () => {
  return (
    <div className='fixed w-full h-screen top-0 left-0 bg-[#0000006d] grid place-items-center'>
    <span className='loader'>Loader</span>
    </div>
  )
}

export default Loader