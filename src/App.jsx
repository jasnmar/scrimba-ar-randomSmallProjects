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
            <Decision render={function(going) {
              return <h1>Am I going out tonight?? {going ? "Yes!" : "Nope..."}</h1>
              }} />
        </div>
    )
}

export default App
