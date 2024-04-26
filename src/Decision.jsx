import { useState } from "react"
export default function Decision({ sayName }) {
    const [goingOut, setGoingOut] = useState(false)
    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }
    const jsx = sayName(goingOut)
    
    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {jsx}
        </div>
    )
}