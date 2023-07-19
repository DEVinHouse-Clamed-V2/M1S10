import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const [usuario, setUsuario] = useState({})

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Bruno-Costa-fig")
  //   .then((resposta) => {
  //     return resposta.json()
  //   })
  //   .then((dados) => {
  //     setUsuario(dados)
  //   })
  //   .catch((erro) => console.log(erro))
  // }, [])

  // useEffect(() => {
  //   const fetchDados = async () => {
  //     try {
  //       const resultado = await fetch("https://api.github.com/users/Bruno-Costa-fig")

  //       if(resultado.status == 200){
  //         const dados = await resultado.json()
  //         setUsuario(dados)
  //       }
  //     } catch (erro) {
  //       console.log(erro)
  //     }
  //   }

  //   fetchDados()
  // }, [])

  useEffect(() => {
    // const fetchDados = async () => {
    //   try {
    //     const resultado = await axios.get("https://api.github.com/users/Bruno-Costa-fig")
    //     if(!!resultado.data){
    //     //   debugger
    //       setUsuario(resultado.data)
    //     }
    //   } catch (erro) {
  
    //   }
    // }

    // fetchDados()

    axios.get("https://api.github.com/users/Bruno-Costa-fig")
    .then(dados => {
      // debugger
      setUsuario(dados.data)
    })
    .catch(erro => console.log(erro))
  }, [])

  return (
    <>
      <h1>Nome do usuário: {usuario?.name}</h1>
    </>
  )
}

export default App
