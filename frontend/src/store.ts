import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  itemCount: number;
  maxQuantityPerProduct: number;
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      itemCount: 0,
      maxQuantityPerProduct: 10,  
      addToCart: (product: Product) => {
        const { cart, maxQuantityPerProduct } = get();

        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
          if (existingItem.quantity < maxQuantityPerProduct) {
            set({
              cart: cart.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              itemCount: get().itemCount + 1,
            });
          } else {
            alert(`You can only add up to ${maxQuantityPerProduct} of this product.`);
          }
        } else {
          set({
            cart: [...cart, { ...product, quantity: 1 }],
            itemCount: get().itemCount + 1,
          });
        }
      },
      removeFromCart: (id: Number) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
        itemCount: Math.max(0, state.itemCount - 1),
      })),
      clearCart: () => set(() => ({
        cart: [],
        itemCount: 0,
      })),
    }),
    {
      name: 'cart-storage', 
    }
  )
);

export default useStore;
