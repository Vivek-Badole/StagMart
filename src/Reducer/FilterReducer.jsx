const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = payload.map((el) => el.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...payload],
        all_products: [...payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color,price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((el) => {
          return el.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((el) => {
          return el.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((el) => {
          return el.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((el) => {
          return el.colors.includes(color);
        });
      }

      if (price===0) {
        tempFilterProduct = tempFilterProduct.filter(
          (el) => el.price === price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter((el) => el.price <= price);
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};
export default FilterReducer;
