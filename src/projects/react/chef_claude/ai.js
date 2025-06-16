// import { InferenceClient } from '@huggingface/inference'



const API_URL = import.meta.env.VITE_API_URL || '/api/recipe';

export default async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredients: ingredientsArr })
        });
        const data = await response.json();
        console.log(data);
        // Adjust this depending on the backend response structure
        return data.choices?.[0]?.message?.content || data.generated_text || "No recipe found.";
    } catch (err) {
        console.error(err.message);
    }
}