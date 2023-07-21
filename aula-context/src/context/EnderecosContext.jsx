/**
 * PASSOS PARA CRIAR UM CONTEXTO
 * 1 - [x] - importe o createContext do react
 * 2 - [x] - criar a variável do context
 *    obs: por padrão o contexto recebe o mesmo nome do arquivo
 * 3 - [x] - defina o provider
 *    3.1 - [x] - defina os dados globais
 *    3.2 - [x] - defina o value do provider
 *      obs: geralmente o value vai ser um objeto
 *    3.3 - [x] - defina o children
 */

// Passo 1
import { createContext, useState } from "react";

// passo 2
export const EnderecosContext = createContext()

// passo 3
export function EnderecosContextProvider({children}) {

  // passo 3.1
  const [listaEndereco, setListaEndereco] = useState([])

  return (
    // criação do provider
    <EnderecosContext.Provider 
    // passo 3.2
    value={{listaEndereco, setListaEndereco}}>

      {/* // passo 3.3 */}
      {children}
      
    </EnderecosContext.Provider>
  )
}