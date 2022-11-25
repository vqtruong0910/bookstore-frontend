const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("userCart")) || initialValue;

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.find((item) => item.IDSanPham === action.item.IDSanPham)
        ? state.map((item) =>
          item.IDSanPham === action.item.IDSanPham
            ? {
              ...item,
              quantity: item.quantity + (action.quantity || 1 )
            }
            : item
        )
        : [...state, { ...action.item, quantity: (action.quantity || 1) }];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.IDSanPham !== action.item.IDSanPham);

    case "DECREMENT_QUANTITY":
      // if quantity is 1 remove from cart, otherwise decrement quantity
      return state.find((item) => item.IDSanPham === action.item.IDSanPham)?.quantity ===
        1
        ? state.filter((item) => item.IDSanPham !== action.item.IDSanPham)
        : state.map((item) =>
          item.IDSanPham === action.item.IDSanPham
            ? {
              ...item,
              quantity: item.quantity - 1
            }
            : item
        );


    case "INCREMENT_QUANTITY":
      return state.map((item) =>
        item.IDSanPham === action.item.IDSanPham
          ? {
            ...item,
            quantity: item.quantity + 1
          }
          : item
      );

    

    case "CLEAR_CART":
      return initialState;


    default:
      return state;
  }
};

export const addToCart = (item, quantity) => ({
  type: "ADD_TO_CART",
  item,
  quantity
});

export const decrementItemQuantity = (item) => ({
  type: "DECREMENT_QUANTITY",
  item
});

export const incrementItemQuantity = (item) => ({
  type: "INCREMENT_QUANTITY",
  item
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  item
});

export const clearCart = () => ({
  type: "CLEAR_CART"
});