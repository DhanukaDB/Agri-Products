export const initialState = {
  cart: [],
  favourite:[],
  user: null,
  address: [],
};

export const getCartTotal = (cart) =>
  cart.reduce((amount, item) => item.price + amount, "");

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
      
      case 'ADD_TO_WISHLIST':
        return {
            ...state,
            favourite :[...state.favourite, action.item],
};

case 'DELETE_FAVOURITE':
const index1 = state.favourite.findIndex(
    (favouriteItem)=>favouriteItem.id === action.id
);

let newFavourite = [...state.favourite];
if(index1 >=0 ){
    newFavourite.splice(index1,1)

}else{
    console.warn(`
        Can't remove the product of id ${index1}
    `)
}
return {
    ...state,
    favourite: newFavourite,
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
