//import { useEffect, useRef, useState } from 'react'
import './App.css'
import Decision from "./Decision"

function App() {
      /**
     * Challenge:
     * Pass a function down via props to Decision that receives
     * the boolean in state and logs it
     */
    return (
        <div>
            <Decision sayName={"Change me"} />
        </div>
    )
}

export default App
