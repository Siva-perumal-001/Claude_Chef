import '../Styles/style.css';
import React from 'react';

export default function Ingredient(props) {

    const ingredientList = props.ingredients.map((item) => {
        return <li className='list-item' key={item}>{item}</li>
    })

    return (
        <section className='ingredient-sec'>
            <h1>Ingredients on hand :</h1>
            <ul className='ing-list'>
                {ingredientList}
            </ul>
            {props.ingredients.length > 3 && <div className='generate-recipe'>
                <div className='generate-recipe-text'>
                    <h1>Ready for a recipe?</h1>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
            <button  utton onClick={props.toggleShown} className='generate-recipe-btn'>Get a recipe</button>
            </div>
            }
        </section>
    )
}
