import { useState } from "react"


export default function Decision({ render }) {
       /**
     * Challenge: figure out what to do with `render`
     */
    const [goingOut, setGoingOut] = useState(false)
    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }
    const jsx = render(goingOut)
    
    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {jsx}
        </div>
    )
}