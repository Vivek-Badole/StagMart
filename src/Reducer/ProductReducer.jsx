const ProductReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_PRODUCTS":
      const featureData = payload.filter((currEl) => {
        return currEl.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: payload,
        featureProducts: featureData,
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: false,
        isError: false,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: payload,
        isError: false,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default ProductReducer;
