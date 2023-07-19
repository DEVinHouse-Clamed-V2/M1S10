// import { useState, useEffect, useRef } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const numero = useRef(0)

//   useEffect(() => {
//     numero.current += 1  
//   }, [count])

//   const atualizaCount = () => {
//     setCount(count + 1)
//     numero.current += 1
//   }

//   return (
//     <>
//       <h1>Contador: {count}</h1> <br />
//       <h2>Ref: {numero.current}</h2> <br />
//       <button onClick={() => atualizaCount()}>+ adicionar</button>
//     </>
//   )
// }

// export default App

import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [cor, setCor] = useState("red")

  const div = useRef()

  useEffect(() => {
    div.current.style.backgroundColor = cor
  })

  return (
    <>
      <div ref={div} style={{ width: '200px', height: '200px' }}>DIV</div>
      <button onClick={() => setCor("red")}>vermelho</button>
      <button onClick={() => setCor("yellow")}>amarelo</button>
      <button onClick={() => setCor("green")}>verde</button>
    </>
  )
}

export default App
