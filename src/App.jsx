//import { useEffect, useRef, useState } from 'react'
import './App.css'
import Decision from "./Decision"

function App() {
    return (
        <div>
            <Decision sayName={function() { console.log('Hi Bob')}} />
        </div>
    )
}

export default App
