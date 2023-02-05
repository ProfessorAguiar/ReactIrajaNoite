import { useState } from "react"
import axios from "axios"
function DeleteAxios() {
    const [idDelete, setIdDelete] = useState(0)
    function DeletarNota() {
        axios
          .delete(`https://servidordenotas-5hrw.onrender.com/notas/${idDelete}`)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div style={{marginTop:30, marginBottom:30}}>
            <div>Deletar Tarefa: </div>
            <label>id: </label>
            <input type="number" id="idDelete" onChange={()=>(
                setIdDelete(document.getElementById('idDelete').value)
    )}/>
            <button onClick={()=>DeletarNota()} style={{margin:10, borderRadius:10, padding:4, backgroundColor:"#1e82f5", fontWeight:'bold', color:'#FFFFFF', fontSize:13}}>Deletar</button>
        </div>
    )
}
export default DeleteAxios