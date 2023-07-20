import { useState, useReducer } from 'react'
import './App.css'

function App() {
  
  const funcaoRedutora = (state, action) => {
    debugger
    switch(action.type){
      case "SOMAR":
        state = state + 1
        state = state + 1
        return state
      case "SUBTRAIR":
        return state - 1
      default:  
        return state
    }
  }

  const [numero, alterarNumero] = useReducer(funcaoRedutora, 0)


  return (
    <>
      <h1>{numero}</h1>
      <button onClick={() => alterarNumero({type: "SOMAR"})}>Somar</button>
      <button onClick={() => alterarNumero({type: "SUBTRAIR"})}>Subtrair</button>
    </>
  )
}

export default App
