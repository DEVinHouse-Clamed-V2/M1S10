import { useContext } from "react"
import {EnderecosContext} from "../context/EnderecosContext"
import Endereco from "./Endereco"

function ListagemEnderecos(){

  // usando o context
  const {listaEndereco} = useContext(EnderecosContext)

  return (
    <>
      {/* map da lista de enderecos */}
      {listaEndereco.map((item, index) => (
        <Endereco key={index} item={item} />
      ))}
    </>
  )
}

export default ListagemEnderecos