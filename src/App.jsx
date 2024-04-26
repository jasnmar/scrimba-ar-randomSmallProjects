import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [list, setList] = useState([])
  const inputRef = useRef(null)

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!text) {
      return;
    }
    setList(prevList => [...prevList, text])
    setText("")
    inputRef.current.focus()
  }
  
  return (
    <>
      <h2>React Project Ideas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Idea"
          ref={inputRef}
        />
        <button>Submit</button>
      </form>

      <ol>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
    </>
  )
}

export default App
