import '../Styles/style.css';

const ingredients = ["apple", "banana", "Orange"];
const ingredientList = ingredients.map((item) => {
    return <li key={item}>{item}</li>
})

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
}

function Content() {
    return (
        <>
            <form className='btm' onSubmit={handleSubmit}>
                <div className='bar'>
                    <input className='search' type="text" name="ingredient" placeholder='e.g Chicken' />
                    <button>+ Add Ingredient</button>
                </div>
            </form>
            <ul className='ing-list'>
                {ingredientList}
            </ul>
        </>
    )
}

export default Content;