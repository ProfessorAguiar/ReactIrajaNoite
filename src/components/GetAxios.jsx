import axios from "axios";
function GetAxios() {
    axios
    .get('https://servidordenotas-5hrw.onrender.com/notas')
    .then((response)=>{console.log(response.data[0].titulo)})
    .catch((error)=>{console.error(error)})
  return (
    <div>GetAxios</div>
  )
}
export default GetAxios