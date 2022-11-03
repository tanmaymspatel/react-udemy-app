import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartRuducer = (state, action) => {

    let existingCartItemIndex;
    let existingCartItem;
    let updatedAmount;
    let updatedItems;

    if (action.type === 'ADD') {
        updatedAmount = state.totalAmount + action.item.price * action.item.amount;

        existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        existingCartItem = state.items[existingCartItemIndex];


        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    if (action.type === 'REMOVE') {

        existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        existingCartItem = state.items[existingCartItemIndex];

        updatedAmount = state.totalAmount - existingCartItem.price;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartRuducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;