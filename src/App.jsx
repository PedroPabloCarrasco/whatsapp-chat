import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Messages from './COMPONENTS/Messages'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='APP'>
     <h1>Whatsapp</h1>
    <Messages/>

   </div>
  )
}

export default App
