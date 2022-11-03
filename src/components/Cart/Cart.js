import { useContext } from "react";
import Model from "../UI/Model";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import './Cart.css'

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const cartAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItemRemoveHndler = id => {
        cartCtx.removeItem(id);
    };

    const cartItems = <ul className="cart-list list-group my-3 overflow-auto">
        {cartCtx.items.map(item =>
            <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHndler.bind(null, item.id)}
            />
        )}
    </ul>


    return (
        <Model onclose={props.onClose}>
            <div className="text-end">
                <span className="btn-close fs-4 me-4 cursor-pointer" onClick={props.onClose}></span>
            </div>
            {cartItems}
            <div className="d-flex justify-content-between px-3 mt-3">
                <p className="fw-bold fs-4">Total Amount</p>
                <p className="fw-bold fs-4">{cartAmount}</p>
            </div>
            <div className="text-end my-2 me-3">
                <button className="btn btn-danger" onClick={props.onClose}>Close</button>
                <button className="btn btn-primary ms-3" disabled={!hasItems}>Order</button>
            </div>
        </Model>
    )
}

export default Cart;