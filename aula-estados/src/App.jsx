import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)

  const exibeValorDoNumber = () => {
    alert(number) // 0
  }

  return (
    <>
      <div className="card">
        <h1>{number}</h1>
        {/* <button onClick={() => {
          setNumber((valorAtual) => valorAtual + 1) // esperado: 0 + 1 -> 1
          setNumber((valorAtual) => valorAtual + 1) // esperado: 0 + 1 -> 1
          setNumber((valorAtual) => valorAtual + 1) // esperado: 0 + 1 -> 1
        }}> */}
        <button onClick={() => {
          setNumber((valorAtual) => valorAtual + 1) // 0
          exibeValorDoNumber()
        }}>
          +1
        </button>
      </div>
    </>
  )
}

export default App
