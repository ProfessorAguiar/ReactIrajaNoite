import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
function App() {
  return (
    <div className="App">
      <div>
        <img src={reactLogo} width="120px" />
      </div>
      <h2>Primeiro Projeto React com Vite</h2>
      <Form/>
    </div>
  )
}
export default App