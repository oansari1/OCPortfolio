import React, { useEffect, useRef } from "react";

export default function IngredientsList(props) {
    const buttonRef = useRef(null);

    // Focus and scroll to the button when it appears (when ingredients.length === 4)
    useEffect(() => {
        if (props.ingredients.length === 4 && buttonRef.current) {
            buttonRef.current.focus();
            buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [props.ingredients.length]);

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section className="flex flex-col items-start bg-[#FAFAF8] rounded-xl p-3 sm:p-6 mt-8 mb-8 sm:mb-12 text-base sm:text-lg" id="ingredients-list-container">
                <h2 className="font-bold text-xl sm:text-2xl">Ingredients on hand:</h2>
                <ul className="flex flex-col items-start ml-4 sm:ml-8 mb-8 sm:mb-12" id="ingredients-list">
                {ingredientsListItems}
                </ul>
                {props.ingredients.length > 3 &&
                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 sm:gap-0 p-3 sm:p-4 rounded-xl bg-[#F0EFEB]" id="get-recipe-container">
                    <div ref={props.ref} className="flex flex-col items-start mb-2 sm:mb-0">
                        <h3 className="font-bold text-base sm:text-lg"> Ready for a recipe?</h3>
                        <p className="text-[#6B7280] text-sm sm:text-base">Generate a recipe from your list of ingredients</p>
                    </div>
                    <button
                        ref={buttonRef}
                        onClick={props.getRecipe}
                        className="rounded-lg border-3 border-[#D17557] bg-[#D17557] text-[#FAFAF8] py-2 sm:py-[9px] px-4 sm:px-[17px] w-full sm:w-auto cursor-pointer text-base sm:text-sm font-medium hover:border-3 hover:bg-[#d1937e] transition-colors duration-300"
                        id="get-recipe-button"
                    >
                        Get a recipe
                    </button>
                </div>}
            </section>
    )
}