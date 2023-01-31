import { useState } from "react"
function NovaTarefa() {
    const [titulo, setTitulo] = useState('Nenhum Titulo Digitado')
    return (
        <>
            <label htmlFor="titulo">Titulo: </label>
            <input type="text" id="titulo" onChange={()=>{
                setTitulo(document.getElementById('titulo').value)
            }} />
            <h3>{titulo}</h3>
        </>
    )
}
export default NovaTarefa