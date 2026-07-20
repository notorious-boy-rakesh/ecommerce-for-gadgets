import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('tg_cart')) || [];
    setCart(savedCart);
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('tg_cart', JSON.stringify(newCart));
  };

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.name === product.name);
    let newCart = [...cart];
    
    if (existingItemIndex >= 0) {
      newCart[existingItemIndex].qty += 1;
    } else {
      newCart.push({ ...product, qty: 1 });
    }
    
    saveCart(newCart);
    alert(product.name + " added to cart!");
  };

  const updateQty = (index, change) => {
    let newCart = [...cart];
    if (newCart[index]) {
      newCart[index].qty += change;
      if (newCart[index].qty <= 0) {
        newCart.splice(index, 1);
      }
      saveCart(newCart);
    }
  };

  const removeItem = (index) => {
    let newCart = [...cart];
    newCart.splice(index, 1);
    saveCart(newCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeItem, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
