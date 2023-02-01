import logo from './assets/react.svg'
import LogoJS from './assets/javascript.svg'
import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'
import GetAxios from './components/GetAxios'
import PostAxios from './components/PostAxios'
function App() {
  return (
    <div className="App">
      <div>
        <img src={LogoJS} width="120px" />
      </div>
      <h2>Primeiro Projeto React com Vite</h2>
      <Form/>
      <br/>
      <NovaTarefa/>
      <GetAxios/>
      <PostAxios/>
    </div>
  )
}
export default App