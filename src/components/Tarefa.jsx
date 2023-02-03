function Tarefa({ titulo }) {
  return (
    <div>
      <label htmlFor={titulo}>{titulo} :</label>
      <input type="checkbox" id={titulo} />
    </div>
  )
}
export default Tarefa