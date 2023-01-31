function Button({cor}){
    const cores={
        Verde:"green",
        Preto:"black",
        Rosa:"pink",
        Roxo:"purple",
        Laranja:"orange",
        Cinza:"grey",
        Azul:"blue",
        Amarelo:"yellow",
        Vermelho:"red",
        Branco:"white",
    }
    return(
        <button onClick={(e)=>{document.querySelector('body').style.backgroundColor=cores[cor]
        e.preventDefault()}}>
            {cor}</button>
    )
}
export default Button