import { useState } from "react"


export default function Decision({ children }) {
       /**
     * Challenge: figure out what to do with `render`
     */
    const [goingOut, setGoingOut] = useState(false)
    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }
    
    
    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {children(goingOut)}
        </div>
    )
}