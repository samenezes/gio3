import { useLocalStorage } from "@uidotdev/usehooks"

export default function Clima({id, nome, exclusao}) {
    const [lista, setLista] = useLocalStorage("lista")

    function check () {
        const tmpLista = lista.map((clima)=>{
            if (clima.id == id) clima.exclusao = !clima.exclusao
            return clima
        })
        setLista(tmpLista)
    }

    function remove() {
        const tmpLista = lista.filter((clima)=> clima.id != id)
        setLista(tmpLista)
    }
    
    return (
        <li className="flex gap-4 p-4 items-center">
        <input className="checkbox" type="checkbox" checked={exclusao} onChange={check} />
        <h1 className="text-xl"> {nome} </h1>
        <button className="btn btn-sm btn-error" onClick={remove}>Remover</button>
    </li>
    )
}
   
