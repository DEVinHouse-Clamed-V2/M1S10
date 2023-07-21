import { useState } from 'react'
import './App.css'

function App() {

  const [medicamento, setMedicamento] = useState({
    nome: "",
    laboratorio: ""
  })
  
  const [listaMedicamentos, setListaMedicamentos] = useState([])
  // debugger

  const handleSubmit = (evento) => {
    evento.preventDefault()

    const medicamento = {
      nome: medicamento.nome,
      laboratorio: medicamento.laboratorio
    }

    const novaLista = [...listaMedicamentos, medicamento]

    setListaMedicamentos(novaLista)
  }

  const handleSetNome = (value) => {
    // debugger
    const medicamento = {laboratorio: medicamento?.laboratorio, nome: value}

    setMedicamento(medicamento)
  }

  const handleSetLaboratorio = (value) => {
    debugger
    const medicamento = {nome: medicamento?.nome, laboratorio: value}

    setMedicamento(medicamento)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="nome">Nome:
          <input 
            type="text" 
            id="nome"
            name="nome"
            value={medicamento.nome} 
            onChange={(evento) => {
              handleSetNome(evento.target.value)
            }} 
          />
        </label>
        <input 
          type="text"
          value={medicamento.laboratorio}
          onChange={(evento) => handleSetLaboratorio(evento.target.value)}
        />
        <button type='submit'>Salvar</button>
      </form>
      {listaMedicamentos.map(medicamento => (<p>{medicamento.nome}</p>))}
    </>
  )
}

export default App
