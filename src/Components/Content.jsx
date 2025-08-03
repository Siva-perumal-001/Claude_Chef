import '../Styles/style.css';
import React from 'react';

function Content() {

    const [ingredients, setIngredients] = React.useState([]);

    const ingredientList = ingredients.map((item) => {
        return <li className='list-item' key={item}>{item}</li>
    })

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredient => [...prevIngredient, newIngredient]);
    }

    return (
        <>
            <form className='btm' onSubmit={handleSubmit}>
                <div className='bar'>
                    <input className='search' type="text" name="ingredient" placeholder='e.g Chicken' autoComplete='off' />
                    <button>+ Add Ingredient</button>
                </div>
            </form>
            <div className='ingredient'> 
                <ul className='ing-list'>
                    {ingredientList}
                </ul>
            </div>
        </>
    )
}

export default Content;