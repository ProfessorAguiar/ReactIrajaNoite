function Button({texto,color}){
    const cores={
        "Verde":"green",
        "Preto":"black"
    }
    return(
        <button onClick={(e)=>{document.querySelector('body').style.backgroundColor=color
        e.preventDefault()}}>
            {texto}</button>
    )
}
export default Button