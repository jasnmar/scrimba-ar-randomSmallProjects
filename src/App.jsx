import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [on, seton] = useState(false)
  const renderCount = useRef(0)


  function forceRender() {
    seton(prevOn => !prevOn)
  }
  useEffect(()=> {
    console.log('Rendered')
    renderCount.current++
  })
  return (
    <>
      <h3>Understanding refs</h3>
      <button onClick={forceRender}>Force re-render w/ state change</button>
      <h4>render count: {renderCount.current}</h4>
    </>
  )
}

export default App
