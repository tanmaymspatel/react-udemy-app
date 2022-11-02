import './HeaderCartBtn.css'

const HeaderCartBtn = props => {
    return (
        <button className="cart-btn btn btn-success bg-opacity-25 px-4" onClick={props.onShowCart}>
            <span className="icon-cart" />
            <span className="px-2">Your Cart</span>
            <span className="bg-danger py-1 px-2">3</span>
        </button>
    )
}

export default HeaderCartBtn