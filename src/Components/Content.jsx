import '../Styles/style.css';
import React from 'react';
import Recipe from './Recipe';
import Ingredient from './Ingredients';

function Content() {
    const [ingredients, setIngredients] = React.useState(['Tomato','Potato','Brinjal','Pumpkin']);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredient => [...prevIngredient, newIngredient]);
    }

    const [recipeShown , setRecipeShown] = React.useState(false);
    function toggleShown(){
        setRecipeShown((prevrecipeShown => !prevrecipeShown))
    }

    return (
        <>
            <form className='btm' action={addIngredient}>
                <div className='bar'>
                    <input className='search' type="text" name="ingredient" placeholder='e.g Chicken' autoComplete='off' required />
                    <button>+ Add Ingredient</button>
                </div>
            </form>
            {ingredients.length > 0 && 
                <Ingredient ingredients = {ingredients}
                            toggleShown = {toggleShown}
                />
            }
            {recipeShown ? <Recipe /> : null}
        </>
    )
}

export default Content;