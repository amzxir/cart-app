const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART": {
      return { ...state, card: [] };
    }
  }
};

export default reducer;
