import logo from './assets/react.svg'
import LogoJS from './assets/javascript.svg'
import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'
import GetAxios from './components/GetAxios'
import BotaoUseEffect from './components/BotaoUseEffect'
import DeleteAxios from './components/DeleteAxios'
import PutAxios from './components/PutAxios'
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div>
        <img src={LogoJS} width="120px" />
      </div>
      <h2>Primeiro Projeto React com Vite</h2>
      
      <GetAxios />
      <BrowserRouter>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/novatarefa">Nova Tarefa</Link></li>
        <li><Link to="/alterar">Alterar</Link></li>
        <li><Link to="/deletar">Deletar</Link></li> 
      </ul>

  
        <Routes>
          <Route exact path='/' element={<h1>Página Home</h1>} />
          <Route path='/form' element={<Form/>} />
          <Route path='/novatarefa' element={<NovaTarefa/>} />
          <Route path='/alterar' element={<PutAxios/>} />
          <Route path='/deletar' element={<DeleteAxios/>} />
        </Routes>

      </BrowserRouter>
      {/* <Form />
      <br />
      <NovaTarefa />
      <DeleteAxios/>
      <PutAxios/> */}

      {/* <BotaoUseEffect/> */}
    </div>
  )
}
export default App