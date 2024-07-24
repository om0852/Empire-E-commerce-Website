"use client"
import Login from '@/components/admin_panel/Login';
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react';
import React from 'react'

const Layout = () => {
    const isLoading = useAppSelector(store=>store.loadingReducer);
    const {data:session}=useSession();
    if(!session?.user){
        return <Login/>
    }
  return (
    <div>Layout</div>
  )
}

export default Layout