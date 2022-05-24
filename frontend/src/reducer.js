export const initialState = {
  cart: [],
  favourite:[],
  user: null,
  address: [],
};

//calculate total cost in cart
export const getCartTotal = (cart) =>
  cart.reduce((amount,item) =>  parseInt(amount)+ parseInt(item.price) , 0 );
    

const reducer = (state, action) => {
  console.log("action >>>>", action);

  switch (action.type) {
    //add a prodct to cart
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
       //remove a prodct from cart

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
          //add a prodct to wishlist

      case 'ADD_TO_WISHLIST':
        return {
            ...state,
            favourite :[...state.favourite, action.item],
};
       //remove a prodct from wishlist

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
