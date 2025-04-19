import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center bg-green-400 p-4 rounded-xl font-bold'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-2'>
          <input 
          type="text" 
          value={password}
          className='outline-none border-none w-full py-1 px-3'
          placeholder='Generated Password'
          readOnly
          ref={passwordRef}
          />
          <button
          className='outline-none bg-blue-700 text-center text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'
          >
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => setLength(e.target.value)}
            />
            <label>length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed((prev) => !prev)}
             
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => setCharAllowed((prev) => !prev)}
             
             />
             <label htmlFor="characterAllowed">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
