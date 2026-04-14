import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]) // initailly empty

// Component renders
// useEffect runs → API call
// setJokes() updates state
// State update triggers re-render
// useEffect runs again
// 👉 Loop continues forever
// so we add a empty dependency array [].
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
