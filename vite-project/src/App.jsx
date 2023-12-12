import { useState } from 'react'
import plant from './assets/plant.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <img id="plant-pic" src={plant}/>
      </div>
      <h1>Cute Plant Pic</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You Pressed Me {count} Times!
        </button>
      </div>
      
    </>
  )
}

export default App
