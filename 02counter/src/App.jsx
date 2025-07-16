import { useState } from "react"


function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
    console.log("add value", Math.random())
  }

  const removeValue = () => {
    counter > 0 ? setCounter(counter - 1): alert("add value")
  }

  return (
    <>
     <h2>Hello junaid.</h2>
     <h2>React counter: {counter}</h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App
