import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <h2>Primeiro Projeto React com Vite</h2>
      <Outlet/>
      <h2>Footer</h2>
    </div>
  )
}
export default App