import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './components/NavBar'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-[2rem] flex-row space-y-28'>
       <NavBar/>
       <div className='flex justify-center space-x-18'>
        <div className='picture'>
          <img src="../public/foto.png" className=" h-85 w-80 rounded-lg shadow-lg"/>
        </div>
        <div>
          <h1 className='text-5xl font-bold'>Larry Fotso.G</h1>
          <p className='text-2xl'>Aspiring Full Stack software Engineer</p>
          <p className='text-2xl'>I am a software engineer with a passion for web development</p>
        </div>
       </div>
    </div>
  )
}

export default App
