import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-amber-500 text-black p-4 rounded-2xl font-bold'>Tailwind test</h1>
      <Card Username={"Harsh Tiwari"} btnText={"Visit Me"} />
      <Card Username={"Harsh Tiwari"} btnText={"Visit Me"} />
    </>
  )
}

export default App
