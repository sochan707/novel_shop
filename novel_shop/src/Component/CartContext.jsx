import { createContext, useContext, useState } from "react";


const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product, format, finalPrice, quantity) => {
    const cartKey = `${product.id}-${format}`;
    setCartItems((prev) => {
      const existing = prev.find((i) => i.cartKey === cartKey);
      if (existing) {
        return prev.map((i) =>
          i.cartKey === cartKey ? { ...i, qty: i.qty + quantity } : i
        );
      }
      return [
        ...prev,
        { cartKey, id: product.id, name: product.name, src: product.src,
          format, price: finalPrice, qty: quantity },
      ];
    });
  };

  const removeFromCart = (key) =>
    setCartItems((prev) => prev.filter((i) => i.cartKey !== key));

  const updateQty = (key, newQty) => {
    if (newQty < 1) return removeFromCart(key);
    setCartItems((prev) =>
      prev.map((i) => (i.cartKey === key ? { ...i, qty: newQty } : i))
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, cartOpen, setCartOpen, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}