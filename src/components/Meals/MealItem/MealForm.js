const MealForm = props => {
    return (
        <div>
            <div className="my-2">
                <label htmlFor="amount">Amount</label>
                <input className="ms-2 text-center" type="number" id="amount" min="1" max="5" step="1" defaultValue="1" />
            </div>
            <div className="text-center">
                <button className="btn btn-primary w-75 rounded-4">+ Add</button>
            </div>
        </div>
    )
}

export default MealForm; 