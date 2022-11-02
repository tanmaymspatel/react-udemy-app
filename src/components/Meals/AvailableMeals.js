import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const meals = [
    {
        id: 'm1',
        name: 'Idli-sambhar',
        description: 'Good food, good health',
        price: 150
    },
    {
        id: 'm2',
        name: 'Avocado Toast',
        description: 'Good food, good health',
        price: 275
    },
    {
        id: 'm3',
        name: 'Vegetable Salad',
        description: 'Good food, good health',
        price: 350
    },
    {
        id: 'm4',
        name: 'Grilled Chicken',
        description: 'Good food, good health',
        price: 500
    }
]

const AvailableMeals = props => {

    const mealList = meals.map(meal => {
        return (
            <MealItem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        )
    });

    return (
        <div className="w-75 m-auto my-5">
            <Card>
                <ul className="list-group p-2">
                    {mealList}
                </ul>
            </Card>
        </div>
    )
}

export default AvailableMeals;