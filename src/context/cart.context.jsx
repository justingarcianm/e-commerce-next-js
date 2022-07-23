import { createContext, useContext, useState, useEffect } from "react";

const CartWrapper = createContext();

const CartContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // check local storage for any cart items
  }, [cartItems]);

  const addToCart = (product) => {
    // update state + local storage
  };

  const removeFromCart = (product) => {
    // remove from state and local storage
  };

  const handleLocalStorage = (product, add) => {
    // manage local storage
    if (add) {
    } else {
    }
  };

  return (
    <CartWrapper.Provider value={{ loading, addToCart, removeFromCart }}>
      {children}
    </CartWrapper.Provider>
  );
};

const CartState = () => useContext(CartWrapper);

export { CartContext, CartState };
