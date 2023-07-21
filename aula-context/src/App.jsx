import ListagemEnderecos from "./components/ListagemEnderecos"
import CardAdicionarEndereco from "./components/CardAdicionarEndereco"
import {EnderecosContextProvider} from "./context/EnderecosContext"
import './App.css'

function App() {
  return (
    <EnderecosContextProvider>
      <CardAdicionarEndereco />
      <ListagemEnderecos />
    </EnderecosContextProvider>
  )
}

export default App