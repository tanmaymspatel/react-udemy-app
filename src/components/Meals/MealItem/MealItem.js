import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import MealForm from "./MealForm";

const MealItem = props => {

    const cartCtx = useContext(CartContext);

    const addTOCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };
    return (
        <li className="list-group-item d-flex justify-content-between px-3 border-0 border-bottom">
            <div>
                <h4 className="fw-bolder">{props.name}</h4>
                <em className="font-italic">{props.description}</em>
                <p className="fw-bold pt-1"><span>$</span><span>{props.price}</span></p>
            </div>
            <div>
                <MealForm onAddToCart={addTOCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;