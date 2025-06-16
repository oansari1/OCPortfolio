import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import getRecipleFromMistral from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe() {
        setLoading(true)
        const recipe = await getRecipleFromMistral(ingredients)
        setRecipe(recipe)
        setLoading(false)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <div className="px-2 sm:px-8 pt-4 sm:pt-8 pb-2 sm:pb-4" id="claudeDiv">
            <form
                action={addIngredient}
                className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 h-auto"
            >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    className="flex-grow min-w-[300px] rounded-lg border border-gray-300 p-2 text-base sm:text-sm shadow-sm mb-2 sm:mb-0"
                />
                <button className="rounded-lg bg-gray-900 text-gray-100 h-12 w-[200px] pb-1 text-base font-medium before:content-['+'] before:mr-1">
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

            {loading && (
                <div className="flex justify-center items-center mt-8 mb-8">
                    <svg className="animate-spin h-8 w-8 text-[#FA9600] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    <span className="text-[#FA9600] font-medium text-base sm:text-lg">Generating recipe...</span>
                </div>
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </div>
    )
}
