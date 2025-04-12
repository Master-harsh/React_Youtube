import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // Actually this is not a good way to do it what happens is in react all things are same then it creates a bach of all the line and then it will execute all the lines at once so it will not work as expected
    // So we need to use the function form of setState
    // setCounter((prevCounter) => prevCounter + 1);

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    // Now it add 3 to the counter value every time you click the button and it takes the previous value of the counter and add 1 to it becouse when previous give the value then the next counter add the next value

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
