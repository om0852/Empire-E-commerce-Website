"use client"
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
interface PropsType{
    children:ReactNode
}
const AuthProvider:React.FC<PropsType> = ({children}) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider