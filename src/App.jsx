// import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'
import GetAxios from './components/GetAxios'
import DeleteAxios from './components/DeleteAxios'
import PutAxios from './components/PutAxios'
import BarraDeNavegacao from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <BarraDeNavegacao/>
    <div style={{margin:60}} >
      <Outlet/>
    </div>
    </>
  )
}
export default App