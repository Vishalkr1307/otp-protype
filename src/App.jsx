import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './Component/InputBox'

function App() {
  const [value, setValue] = useState("hello world")

  return (
    <div >
      <InputBox length={4} onChange={(val)=>setValue(val)}  perBox={1}/>
      <div>
        <h2>{value}</h2>
      </div>
      
    </div>
  )
}

export default App
