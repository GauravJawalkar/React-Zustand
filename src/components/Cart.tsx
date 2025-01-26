"use client"

import React, { Fragment } from 'react'
import { Product, useProductStore } from '@/store/ProductStore'

const Cart = () => {

    const { cart, removeFromCart, clearCart }: any = useProductStore((state: any) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        clearCart: state.clearCart
    }));

    return (
        <Fragment>
            <div className='flex items-center justify-center flex-col my-10'>
                {cart.length === 0 ? "No Items in the cart" : cart.map(({ name, description, id }: Product) => {
                    return (
                        <div key={id} className='my-5 border p-5 rounded-lg'>
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <button className='bg-gray-800 px-4 py-2 rounded my-2'
                                onClick={() => removeFromCart(id)}>
                                Remove Product
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className='text-center'>
                <button className='bg-gray-800 px-4 py-2 rounded'
                    onClick={clearCart}>
                    Clear Cart
                </button>
            </div>
        </Fragment>
    )
}

export default Cart