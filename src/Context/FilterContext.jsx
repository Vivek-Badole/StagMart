import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useGlobalContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //For GridView
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  //For ListView
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //For Sorting Function

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  //Update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };


//For Clearing the filters
const clearFilters = ()=>{
  dispatch({type:"CLEAR_FILTERS"})
};

  //For Sorting the Products
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue,clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterProvider, useFilterContext };
