export const initialState = {
  cart: [],
  user: null,
  address: [],
};

export const getCartTotal = (cart) =>
  cart.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log("action >>>>", action);

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "DELETE_PRODUCT":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`
            Can't remove the product of id ${index}
        `);
      }
      return {
        ...state,
        cart: newCart,
      };

    case "SET_ADDRESS":
      return {
        ...state,
        address: { ...action.item },
      };
    case "SET_USER":
      return state;
    default:
      return state;
  }
};
export default reducer;
