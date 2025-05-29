export default function Die(props) {
    const buttonClasses = props.isHeld
        ? "bg-green-400 text-gray-900"
        : "bg-white text-gray-900";
    
    return (
        <button
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
            className={`${buttonClasses} w-16 h-16 rounded-lg shadow-md text-2xl font-bold transition`}
        >{props.value}</button>
    )
}