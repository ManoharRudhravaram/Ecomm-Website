function CartReducer(state, action) {
    switch (action.type) {

        case "SET_CART":
            let { single: { img, price, title, id, stock }, cartCount } = action.payload;
            let findData = state.cart.find((item) => {
                return item.id == id;
            })
            if (findData) {
                let findDataArr = state.cart.map((item) => {
                    if (findData.id == item.id) {
                        let x = item.cartCount + cartCount;
                        let newData = item.stock > x ? x : item.stock;
                        return { ...item, cartCount: newData }
                    }
                    else {
                        return { ...item }
                    }
                })
                return { ...state, cart: findDataArr }
            }
            else {
                let cartData = {
                    cartCount, image: img, price, title, id, stock
                }
                return { ...state, cart: [...state.cart, cartData] }
            }

        case "TOTAL_COUNT":
            let tempcart = [...state.cart]
            let total = tempcart.reduce((acc, item) => {
                return acc + item.cartCount
            }, 0)
            return { ...state, totalCount: total }

        case "TOTAL_PRICE":
            let updatePrice = state.cart.reduce((acc, item) => {
                return acc + (item.price * item.cartCount)
            }, 0)
            return {
                ...state,
                totalPrice: updatePrice
            }
        case "INC_CART":
            let updateCart = state.cart.map((item) => {
                if (item.id == action.payload) {
                    let newAmount =
                        item.stock > item.cartCount ? item.cartCount + 1 : item.stock;
                    return {
                        ...item,
                        cartCount: newAmount,
                    };
                } else {
                    return {
                        ...item,
                    };
                }
            });

            return { ...state, cart: updateCart };

        case "DEC_CART":
            let updatecart2 = state.cart.map((item) => {
                if (item.id == action.payload) {
                    let newAmmount = item.cartCount > 1 ? item.cartCount - 1 : 1;
                    return {
                        ...item,
                        cartCount: newAmmount,
                    };
                } else {
                    return {
                        ...item,
                    };
                }
            });
            return { ...state, cart: updatecart2 };
        case "REMOVE_ITEM":
            let temp = [...state.cart];
            let updatedArr = temp.filter((item) => {
                return item.id !== action.payload;
            })
            return { ...state, cart: updatedArr }

        case "CLEAR_ALL":
            return { ...state, cart: [] }
        default:
            return state;
    }

}

export default CartReducer;