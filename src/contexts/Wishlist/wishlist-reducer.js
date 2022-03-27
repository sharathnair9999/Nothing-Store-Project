const initialWishlistState = {
  wishlistItems : [],
  error:null,
  isLoading:false
}

const wishlistReducer = (state, action) => {
  const {type, payload} = action
  switch(type){
    case "SET_WISHLIST_ITEMS":
      return {...state , wishlistItems: payload}
    case "ADD_TO_WISHLIST":
      return {...state, wishlistItems : payload}
    case "REMOVE_FROM_WISHLIST":
      return {...state, wishlistItems : payload}
    case "ERROR":
      return {...state, error: payload}
    case "LOADING":
      return {...state, loading: payload}
  }
}

export {initialWishlistState, wishlistReducer}