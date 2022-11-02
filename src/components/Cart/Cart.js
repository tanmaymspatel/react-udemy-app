import Model from "../UI/Model";

const Cart = props => {

    const cartItems = <ul className="list-group">
        {[{ id: 'c1', name: 'Idli-sambhar', amount: 2, price: 150 }].map(item => <li className="list-group-item border-0 fs-5" key={item.id}>{item.name}</li>)}
    </ul>

    return (
        <Model onclose={props.onClose}>
            {cartItems}
            <div className="d-flex justify-content-between px-3">
                <p className="fw-bold fs-4">Total Amount</p>
                <p className="fw-bold fs-4">$ 300</p>
            </div>
            <div className="text-end my-2 me-3">
                <button className="btn btn-danger" onClick={props.onClose}>Close</button>
                <button className="btn btn-primary ms-3">Order</button>
            </div>
        </Model>
    )
}

export default Cart;