// import { InferenceClient } from '@huggingface/inference'



export default async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch('http://localhost:5000/api/recipe', {
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