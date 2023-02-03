import axios from "axios";
import { useEffect, useState } from "react";
import Tarefa from "./Tarefa";
function GetAxios() {
  const [tarefas, setTarefas] = useState([])
  useEffect(() => {
    axios
      .get('https://servidordenotas-5hrw.onrender.com/notas')
      .then((response) => {
        console.log(response.data[0].titulo)
        setTarefas(response.data)
      })
      .catch((error) => { console.error(error) })
  }, [])
  return (
    <div>
      {tarefas.map((element, key) => (
        <Tarefa titulo={element.titulo} key={key} />
      ))}
    </div>
  )
}
export default GetAxios