"use client";
import Loader from "@/components/admin_panel/Loader";
import Cart from "@/components/frontend/Cart";
import Feature from "@/components/frontend/Feature";
import Hero from "@/components/frontend/Hero";
import Navbar from "@/components/frontend/Navbar";
import TrendingProduct from "@/components/frontend/TrendingProduct";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showCart,setShowCart]=useState(false);
  return (
   <main>
<Navbar setShowCart={setShowCart}/>
<Hero/>
<Feature/>
<TrendingProduct/>
{showCart && <Cart setShowCart={setShowCart}/>
}    {/* <Loader/> */}
   </main>
  );
}
