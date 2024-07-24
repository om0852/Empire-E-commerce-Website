"use client"
import React, { ReactNode } from 'react'

// import { store } from "@/redux/store";
import { Provider } from 'react-redux';
interface PropsType {
    children: ReactNode
}
const App = ({ children }: PropsType) => {
    // return <Provider store={store}>{children}  </Provider>

}

export default App