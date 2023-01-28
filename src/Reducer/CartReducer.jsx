const CartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = payload;
      //console.log(product);

      //To tackle existing product

      let existingProduct = state.cart.find((el) => el.id === id + color);

      if (existingProduct) {
        let updatedProduct = state.cart.map((el) => {
          if (el.id === id + color) {
            let newAmount = el.amount + amount;
            if (newAmount >= el.max) {
              newAmount = el.max;
            }
            return {
              ...el,
              amount: newAmount,
            };
          } else {
            return el;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter((el) => {
        return el.id !== payload;
        // console.log(el);
      });
      return {
        ...state,
        cart: updatedCart,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_DECREASE":
      let updatedProd = state.cart.map((el) => {
        if (el.id === payload) {
          let decAmount = el.amount - 1;
          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...el,
            amount: decAmount,
          };
        } else {
          return el;
        }
      });
      return {
        ...state,
        cart: updatedProd,
      };

    case "SET_INCREASE":
      let updatedIncProd = state.cart.map((el) => {
        if (el.id === payload) {
          let incAmount = el.amount + 1;
          if (incAmount >= el.max) {
            incAmount = el.max;
          }
          return {
            ...el,
            amount: incAmount,
          };
        } else {
          return el;
        }
      });
      return {
        ...state,
        cart: updatedIncProd,
      };

    // case "CART_TOTAL_ITEM":
    //   let updatedItemVal = state.cart.reduce((acc, curV) => {
    //     let { amount } = curV;
    //     acc = acc + amount;
    //     return acc;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_item: updatedItemVal,
    //   };
    // case "CART_TOTAL_PRICE":
    //   let total_price = state.cart.reduce((acc, curV) => {
    //     let { price, amount } = curV;

    //     acc = acc + price * amount;
    //     return acc;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_price,
    //   };

    case "CART_ITEM_PRICE_TOTAL":
      let { total_item, total_price } = state.cart.reduce(
        (acc, curV) => {
          let { price, amount } = curV;

          acc.total_item += amount;
          acc.total_price += price * amount;
          return acc;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_item,
        total_price,
      };
    default:
      return state;
  }
};

export default CartReducer;
