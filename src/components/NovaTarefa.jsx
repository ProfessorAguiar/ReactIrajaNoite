import { useState } from "react"
import axios from "axios"
function NovaTarefa() {
    const [tituloTarefa, setTituloTarefa] = useState("Nenhum Titulo Digitado")
    const dado = {
        id: "",
        titulo: tituloTarefa,
        status: true,
      }
    function PostarNota() {
        axios
          .post('https://servidordenotas-5hrw.onrender.com/notas', dado)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div style={{marginTop:30, marginBottom:30}}>Adicionar Tarefa: 
        <div style={{display:'flex',alignItems:'center'}}>
            <label style={{marginRight:20}}>Titulo: </label>
            <input type="text" id="titulo" style={{height:25}} onChange={()=>(
                setTituloTarefa(document.getElementById('titulo').value)
    )}/>
            <button onClick={()=>PostarNota()} style={{margin:10, borderRadius:10, padding:4, backgroundColor:"#1e82f5", fontWeight:'bold', color:'#FFFFFF', fontSize:13}}>Cadastrar</button>
        </div>
        </div>
    )
}
export default NovaTarefa