import { useRef, useState } from "react";

const MealForm = props => {

    const amountInuptRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInuptRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        };

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="my-2">
                <label htmlFor="amount">Amount</label>
                <input className="ms-2 text-center"
                    ref={amountInuptRef}
                    type="number"
                    id="amount"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="1" />
            </div>
            <div className="text-center">
                <button className="btn btn-primary w-75 rounded-4">+ Add</button>
            </div>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealForm; 