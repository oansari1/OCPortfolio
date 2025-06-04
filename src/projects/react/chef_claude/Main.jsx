import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import getRecipleFromMistral from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe() {
        const recipe = await getRecipleFromMistral(ingredients)
        setRecipe(recipe)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <div className="px-8 pt-8 pb-4" id="claudeDiv">
            <form
                action={addIngredient}
                className="flex justify-center items-center gap-3 h-10"
            >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    className="flex-grow min-w-[150px] max-w-[400px] rounded-lg border border-gray-300 p-2 shadow-sm"
                />
                <button className="rounded-lg bg-gray-900 text-gray-100 h-8 w-36 pb-1 text-sm font-medium before:content-['+'] before:mr-1">
                    Add ingredient
                </button>
            </form>
                {ingredients.length > 0 &&
                    <IngredientsList
                        ref={recipeSection}
                        ingredients={ingredients}
                        getRecipe={getRecipe}
                    />
                }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </div>
    )
}
