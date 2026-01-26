import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create (
    persist(
    
    (set) => ({
    items:[],
    
    addItem: (product) => 
        set((state) => {

            //if product is not null, increase quantity
            const existing = state.items.find((item) => item.id === product.id)

            if(existing) {
                return{
                    items: state.items.map((item) =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1} 
                    : item
                ),

                }
            }

            return {
                items: [...state.items, {...product, quantity: 1}]
            }
        }),

        removeItem: (id) => set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),

        updateQuantity: (id, qty) =>
            set((state) => ({items: state.items.map((item) => (item.id === id ? {...item, quantity: Math.max(1, qty) } : item ))})),

        clearCart: () => set({ items: [] }),
}),
        {
            name: 'quote-cart-storage',
        }
        /*totalItems: () =>{
            return 0
        },*/
)
)



