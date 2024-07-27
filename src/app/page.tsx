"use client";
import Loader from "@/components/admin_panel/Loader";
import Cart from "@/components/frontend/Cart";
import Hero from "@/components/frontend/Hero";
import Navbar from "@/components/frontend/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showCart,setShowCart]=useState(false);
  return (
   <main>
<Navbar setShowCart={setShowCart}/>
<Hero/>
{showCart && <Cart setShowCart={setShowCart}/>
}    {/* <Loader/> */}
   </main>
  );
}
