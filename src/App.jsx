import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Body from './Components/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10">
      <h1 className='ml-3 text-3xl font-bold mb-10'>List of Countries with Their Flags</h1>
      <Body/>
    </div>
  )
}

export default App
