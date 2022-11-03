import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import './HeaderCartBtn.css'

const HeaderCartBtn = props => {

    const cartCtx = useContext(CartContext);

    const numberOfCartItem = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    return (
        <button className="cart-btn btn btn-dark px-5" onClick={props.onShowCart}>
            <span className="icon-cart" />
            <span className="px-3">Your Cart</span>
            <span className="bg-danger py-1 px-2 rounded-circle">{numberOfCartItem}</span>
        </button>
    )
}

export default HeaderCartBtn