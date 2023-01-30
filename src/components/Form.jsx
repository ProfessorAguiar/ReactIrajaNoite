import Button from "./Button"

function Form(){
    return(
        <form>
            <label>Nome: 
            <input type="text"/>
            </label>
            <br/>
            <label>email:
            <input type="email"/>
            </label>
            <br/>
            <label>Mensagem:
            <textarea rows="5" cols="40"/>
            </label>
            <br/>
            <Button texto="Prop Enviar" color="green"/>
            <Button texto="Prop Enviar" color="black"/>
            <Button texto="Prop Enviar" color="blue"/>
        </form>
    )
}
export default Form