//import { useEffect, useRef, useState } from 'react'
import './App.css'
import Decision from "./Decision"

function App() {
    return (
        <div>
            <Decision sayName={function(bool) { console.log(bool)}} />
        </div>
    )
}

export default App
