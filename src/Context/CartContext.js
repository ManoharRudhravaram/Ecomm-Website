import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

let cartContextValue = createContext();

function CartContext({ children }) {

  function addCart(data) {
    dispatch({ type: "SET_CART", payload: data });
  }

  let intialState = { cart: getData(), totalCount: '0', totalPrice: '' }

  function incHandler(id) {
    dispatch({ type: "INC_CART", payload: id })
  }

  function decHandler(id) {
    dispatch({ type: "DEC_CART", payload: id })
  }

  let [state, dispatch] = useReducer(reducer, intialState);

  function getData() {
    return localStorage.getItem("cartData")
      ? JSON.parse(localStorage.getItem("cartData"))
      : [];
  }

  function setData() {
    return localStorage.setItem("cartData", JSON.stringify(state.cart))
  }

  function clearAll() {
    dispatch({type:"CLEAR_ALL"})
  }

  function removeHandler(id) {
    dispatch({type:"REMOVE_ITEM",payload:id})

  }

  useEffect(() => {
    dispatch({type:"TOTAL_COUNT"})
    dispatch({type:"TOTAL_PRICE"})
    setData()
  }, [state.cart])
  return (
    <cartContextValue.Provider
      value={{ ...state, addCart, incHandler, decHandler ,removeHandler ,clearAll}}
    >
      {children}
    </cartContextValue.Provider>
  );
}

export const useCart = () => {
  return useContext(cartContextValue);
};

export default CartContext;
