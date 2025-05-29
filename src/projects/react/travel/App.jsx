import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function TravelApp() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <div className="max-w-3xl mt-9 mx-auto over">
                {entryElements}
            </div>
        </>
    )
}