export const initialState={
    favourite:[],
    user:null,
};


export const getTotal = (favourite) => 
favourite.reduce((amount,item)=> item.price + amount, 0);

const reducer = (state, action)=>{
    console.log("action >>>>",action);

    switch(action.type){
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                favourite :[...state.favourite, action.item],
};

case 'DELETE_FAVOURITE':
    const index = state.favourite.findIndex(
        (favouriteItem)=>favouriteItem.id === action.id
    );

    let newFavourite = [...state.favourite];
    if(index >=0 ){
        newFavourite.splice(index,1)

    }else{
        console.warn(`
            Can't remove the product of id ${index}
        `)
    }
    return {
        ...state,
        favourite: newFavourite,
    };
    
}
 } ;
export default reducer;