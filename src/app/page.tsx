"use client"

import Products from "@/components/Products";
import Link from "next/link";
import { useProductStore } from "@/store/ProductStore";

export default function Home() {
  const { cart } = useProductStore((state: any) => (
    {
      cart: state.cart
    }
  ))
  return (
    <>
      <div className="flex flex-col items-center justify-center  antialiased font-normal min-h-screen">
        <Link href={'/cart'} className="bg-gray-500 px-3 py-2 rounded relative">
          <h1 className="absolute -left-1 -top-3 font-semibold text-lg">{cart.length}</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
            <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </Link>
        <Products />
      </div>
    </>
  );
}
