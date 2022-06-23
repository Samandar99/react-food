import {Meal} from './Meal';

function MeaIList({ meals }) {
    return (
        <div className="list">
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}

export {MeaIList};