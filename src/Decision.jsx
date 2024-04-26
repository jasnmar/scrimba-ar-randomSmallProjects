import { useState } from "react"
export default function Decision({ sayName }) {
    const [goingOut, setGoingOut] = useState(false)
    sayName(goingOut)
    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }
    
    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            <h1>Am I going out tonight, {name}?? {goingOut ? "Yes!" : "Nope..."}</h1>
        </div>
    )
}