import axios from "axios";
import { useEffect, useState } from "react";
import Tarefa from "./Tarefa";
import NovaTarefa from "./NovaTarefa"
import DeleteAxios from "./DeleteAxios"
import PutAxios from "./PutAxios";
function GetAxios() {
  const [tarefas, setTarefas] = useState([])
  const [ref, setRef] = useState(0)
  function ordenar() {
    axios
      .get('https://servidordenotas-5hrw.onrender.com/notas')
      .then((response) => {
        console.log(response.data[0].titulo)
        const ordemAlf = [...response.data]
        ordemAlf.sort((a, b) => {
          return a.titulo.localeCompare(b.titulo)
        })
        setTarefas(ordemAlf)
      })
      .catch((error) => { console.error(error) })
  }

  useEffect(() => {
    axios
      .get('https://servidordenotas-5hrw.onrender.com/notas')
      .then((response) => {
        console.log(response.data[0].titulo)
        setTarefas(response.data)
      })
      .catch((error) => { console.error(error) })
  }, [ref])

  return (
    <div>
      <h2>Tarefas</h2>
      <NovaTarefa />
      <DeleteAxios/>
      <PutAxios/>
      <button onClick={() => ordenar()} style={{ margin: 10, borderRadius: 10, padding: 4, backgroundColor: "#1e82f5", fontWeight: 'bold', color: '#FFFFFF', fontSize: 13 }}>Ordem Alfabética</button>
      <button onClick={() => setRef(ref + 1)} style={{ margin: 10, borderRadius: 10, padding: 4, backgroundColor: "#1e82f5", fontWeight: 'bold', color: '#FFFFFF', fontSize: 13 }}>Ordenar por Id</button>
      <button onClick={() => setRef(ref + 1)} style={{ margin: 10, borderRadius: 10, padding: 4, backgroundColor: "#1e82f5", fontWeight: 'bold', color: '#FFFFFF', fontSize: 13 }}>Atualizar</button>
      {tarefas.map((element) => (
        <Tarefa idTarefa={element.id} tituloTarefa={element.titulo} key={element.id} />
      ))}
    </div>
  )
}
export default GetAxios