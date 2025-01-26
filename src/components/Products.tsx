import React from 'react'
import { useProductStore } from '@/store/ProductStore'


interface ProductListType {
    id: number,
    name: string,
    description: string
}

const Products = () => {
    const productsList: ProductListType[] = [
        {
            id: Math.ceil(Math.random() * 100000 + 1),
            name: "Iphone 16 pro max",
            description: "This is a description for product of iphone 16 pro max"
        },
        {
            id: Math.ceil(Math.random() * 100000 + 1),
            name: "Iphone 15 pro max",
            description: "This is a description for product of iphone 15 pro max"
        },
        {
            id: Math.ceil(Math.random() * 100000 + 1),
            name: "Iphone 14 pro max",
            description: "This is a description for product of iphone 14 pro max"
        },
        {
            id: Math.ceil(Math.random() * 100000 + 1),
            name: "Iphone 13 pro max",
            description: "This is a description for product of iphone 13 pro max"
        },
        {
            id: Math.ceil(Math.random() * 100000 + 1),
            name: "Iphone 12 pro max",
            description: "This is a description for product of iphone 12 pro max"
        }
    ]

    const { addToCart }: any = useProductStore((state: any) => ({
        addToCart: state.addToCart,
    }));

    return (
        <div>
            {
                productsList.map(({ id, name, description }) => {
                    return (
                        <div key={id}>
                            <div className='my-5'>
                                <h1 className='text-3xl'>{name}</h1>
                                <p className='text-gray-400'>{description}</p>
                            </div>
                            <button className='bg-gray-800 px-3 py-2 rounded' onClick={() => addToCart({ id, name, description })}>Add Product</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products