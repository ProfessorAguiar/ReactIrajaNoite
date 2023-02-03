function Tarefa({ tituloTarefa }) {
  return (
    <div>
      <label htmlFor={tituloTarefa}>{tituloTarefa} :</label>
      <input type="checkbox" id={tituloTarefa} />
    </div>
  )
}
export default Tarefa