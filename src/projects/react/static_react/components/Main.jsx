// Main.jsx (inside StaticReact)
export default function Main() {
    return (
        <div id="main" className="text-white p-8 bg-gray-900 rounded-b-xl">
            <h1 className="text-4xl font-bold mb-6">Fun facts about React</h1>
            <ul className="list-disc list-inside space-y-4 max-w-md mx-auto text-left">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}
