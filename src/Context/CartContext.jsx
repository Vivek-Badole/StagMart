import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();
const getData = () => {
  let localCart = localStorage.getItem("carty");
  const parsedData = JSON.parse(localCart);
  if(!Array.isArray(parsedData)) return [];
  return parsedData;
};
const initialState = {
  cart: getData(),
  total_item: "",
  total_price: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  //Increment & Decrement

  const setDecrease = (id)=>{
    dispatch({type:"SET_DECREASE",payload:id})
  }

  const setIncrease = (id)=>{
    dispatch({type:"SET_INCREASE",payload:id})
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //To add data in localStorage
  useEffect(() => {
    // dispatch({type:"CART_TOTAL_ITEM"});
    // dispatch({type:"CART_TOTAL_PRICE"});
    dispatch({type:"CART_ITEM_PRICE_TOTAL"});
    localStorage.setItem("carty", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart,setDecrease,setIncrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
