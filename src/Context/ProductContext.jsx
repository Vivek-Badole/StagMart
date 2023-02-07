
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";

const ProductContext = createContext();

const API = "https://stag-mart-data.onrender.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "FETCH_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data[0];
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
    
  );
};

// custom hooks
const useGlobalContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductContext, useGlobalContext };

