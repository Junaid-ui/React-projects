import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-300 p-4 rounded-4xl mb-4 flex-1/2' >Test</h1>
     <Button username="button"/>
     <Button username="button 2"/>
    </>
  )
}

export default App
