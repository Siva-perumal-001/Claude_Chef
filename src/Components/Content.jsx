import '../Styles/style.css';
import React from 'react';

function Content() {

    const [ingredients, setIngredients] = React.useState([]);

    const ingredientList = ingredients.map((item) => {
        return <li className='list-item' key={item}>{item}</li>
    })

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredient => [...prevIngredient, newIngredient]);
    }

    let length = ingredients.length;
    console.log(length);

    return (
        <>
            <form className='btm' action={addIngredient}>
                <div className='bar'>
                    <input className='search' type="text" name="ingredient" placeholder='e.g Chicken' autoComplete='off' />
                    <button>+ Add Ingredient</button>
                </div>
            </form>
            {length > 0 &&
                <section className='ingredient-sec'>
                    <h1>Ingredients on hand :</h1>
                    <ul className='ing-list'>
                        {ingredientList}
                    </ul>
                    <div className='generate-recipe'>
                        <div className='generate-recipe-text'>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients</p>
                        </div>
                        <button className='generate-recipe-btn'>Get a recipe</button>
                    </div>
                </section>
            }
        </>
    )
}

export default Content;