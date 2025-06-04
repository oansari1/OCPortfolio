export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section className="flex flex-col items-start bg-[#FAFAF8] rounded-xl p-6 mb-12" id="ingredients-list-container">
                <h2 className="font-bold text-2xl">Ingredients on hand:</h2>
                <ul className="flex flex-col items-start ml-8 mb-12" id="ingredients-list">
                {ingredientsListItems}
                </ul>
                {props.ingredients.length > 3 &&
                <div className="flex items-center justify-between w-full p-4 rounded-xl bg-[#F0EFEB]" id="get-recipe-container">
                    <div ref={props.ref} className=" flex flex-col items-start">
                        <h3 className="font-bold text-lg"> Ready for a recipe?</h3>
                        <p className="text-[#6B7280]">Generate a recipe from your list of ingredients</p>
                    </div>
                    <button onClick={props.getRecipe} className="rounded-lg border-3 border-[#D17557] bg-[#D17557] text-[#FAFAF8] py-[9px] px-[17px] cursor-pointer text-sm font-medium hover:border-3 hover:bg-[#d1937e]  transition-colors duration-300" id="get-recipe-button">
                        Get a recipe
                    </button>
                </div>}
            </section>
    )
}