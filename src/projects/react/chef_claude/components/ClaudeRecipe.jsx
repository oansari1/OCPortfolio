import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    return (
        <section id="suggested-recipe-container" aria-live="polite">
            <h2 className="font-bold text-2xl">Chef Claude Recommends:</h2>
            <div className="prose prose-sm md:prose-base prose-p:my-2 prose-li:my-1 prose-h3:mt-4 prose-h3:mb-2 max-w-none">
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </div>
        </section>
    )
}