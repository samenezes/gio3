import { useLocalStorage } from "@uidotdev/usehooks"
import { useState } from "react"    
import Clima from "./components/clima"

function App() {
    const [lista, setLista] = useLocalStorage("lista", [])
    const [novoClima, setNovoClima] = useState("")

    function adcClima() {
        if (novoClima == "") return setLista([...lista,{
            id: lista.length + 1,
            nome: novoClima,
            exclusao: false
        }])
        setNovoClima("")
    }
    return (
        <div className="min-h-screen p-4 flex flex-col gap-4 p-4">
        <div className="form-control mx-auto">
            <label>
                <span class="label-text">Digite um novo clima para a cidade</span>
            </label>
            <input
                className="input input-bordered"
                type="text" 
                value={novoClima}
                onChange={(e) => setNovoClima(e.target.value)}
            />
            <button className="btn mt-4" onClick={adcClima}>Adicionar</button>
        </div>
        <main className="grid grid-cols-2 gap-4">
            <ul className="bg-neutral p-4 rounded">
                Clima adicionado:
                {lista.filter(clima => !clima.exclusao).map((clima, posicao) => (
                    <Clima key={posicao} id={clima.id} nome={clima.nome} exclusao={clima.exclusao} />
                ))}
            </ul>
            <ul className="bg-neutral p-4 rounded">
                Clima excluido:
                {lista.filter(clima => clima.exclusao).map((clima, posicao) => (
                    <Clima key={posicao} id={clima.id} nome={clima.nome} exclusao={clima.exclusao} />
                ))}
            </ul>
        </main>
    </div>
    


    )
}
export default App

