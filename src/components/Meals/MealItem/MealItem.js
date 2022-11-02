import MealForm from "./MealForm";

const MealItem = props => {
    return (
        <li className="list-group-item d-flex justify-content-between px-3 border-0 border-bottom">
            <div>
                <h4 className="fw-bolder">{props.name}</h4>
                <em className="font-italic">{props.description}</em>
                <p className="text-info fw-bold pt-1"><span>$</span><span>{props.price}</span></p>
            </div>
            <div>
                <MealForm />
            </div>
        </li>
    )
}

export default MealItem;