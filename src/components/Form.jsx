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
            <br/>
            <br/>
            <Button cor="Branco"/>
            <Button cor="Preto"/>
            <Button cor="Azul"/>
            <Button cor="Verde"/>
            <Button cor="Rosa"/>
            <Button cor="Roxo"/>
            <Button cor="Laranja"/>
            <Button cor="Cinza"/>
            <Button cor="Amarelo"/>
            <Button cor="Vermelho"/>
        </form>
    )
}
export default Form