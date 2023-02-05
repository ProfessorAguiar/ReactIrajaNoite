function Tarefa({ idTarefa,tituloTarefa }) {
  return (
    <div style={{align:'left', display:'flex', margin:20, alignItems:'center'}}>
      <label htmlFor={tituloTarefa}>{idTarefa} :</label>
      <input type="checkbox" id={tituloTarefa} />
      <span style={{marginLeft:20}}> {tituloTarefa}</span>
    </div>
  )
}
export default Tarefa