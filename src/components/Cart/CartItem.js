const CartItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className='d-flex justify-content-between px-4 border-bottom py-3'>
            <div>
                <h4>{props.name}</h4>
                <div className='d-flex align-items-center'>
                    <p className='text-success fw-bold'>{price}</p>
                    <p className='border-1 px-3 py-1 border-primary ms-3 border border-primary'>x {props.amount}</p>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary" onClick={props.onRemove}>−</button>
                <button className="btn btn-outline-secondary ms-1" onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;