const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }
    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
      };
    }
    case "CHANGE_QUNTITY": {
      const cartItem = state.cart.map((i) => {
        if (i.id === action.payload.id && action.payload.quntity > 0) {
          return { ...i, quntity: action.payload.quntity };
        }
        return i;
      });
      return { ...state, cart: cartItem };
    }
    case "GET_TOTAL": {
      let { total, quntity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quntity } = cartItem;
          const totalItem = price * quntity;

          cartTotal.total += totalItem;
          cartTotal.quntity += quntity;

          return cartTotal;
        },
        {
          total: 0,
          quntity: 0,
        }
      );

      return { ...state, total, quntity };
    }
  }
};

export default reducer;
