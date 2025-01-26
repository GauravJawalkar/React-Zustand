import { create } from "zustand";

interface ProductId {
    id: number
}

export interface Product extends ProductId {
    name: string,
    description: number
}

export const useProductStore = create((set) => ({
    cart: [],
    addToCart: (product: Product) => set((state: any) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productId: Product) => set((state: any) => ({ cart: state.cart.filter((item: any) => item.id !== productId) })),
    clearCart: () => set({ cart: [] }),
})
)