import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1);
    if (counter >= 10) {
      setCounter(5);
      alert("Counter value cannot exceed 10");
      return;
    }
  }

  const subValue = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(5);
      alert("Counter value cannot be negative");
      return;
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >add value</button>
      <br />
      <button
      onClick={subValue}
      >sub value</button>
    </>
  )
}

export default App
