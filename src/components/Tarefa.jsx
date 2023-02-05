function Tarefa({ idTarefa,tituloTarefa }) {
  return (
    <div style={{align:'left', display:'flex', margin:20, alignItems:'center'}}>
      <label htmlFor={idTarefa} style={{marginRight:10}}>{idTarefa}</label>
      <input type="checkbox" id={idTarefa} />
      <span style={{marginLeft:20}} id={idTarefa}> {tituloTarefa}</span>
    </div>
  )
}
export default Tarefa