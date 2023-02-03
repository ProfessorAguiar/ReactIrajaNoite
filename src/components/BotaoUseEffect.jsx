import { useEffect, useState } from "react"
function BotaoUseEffect() {
    const [count, setCount] = useState(0)
    const [teste, setTeste] = useState(0)
    useEffect(() => {
        console.log(`Contagem ${count}`)
        console.log(`Teste ${teste}`)
    },[count])
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>UseEffect1</button>
            <button onClick={() => { setTeste(teste + 1) }}>UseEffect2</button>
        </div>
    )
}
export default BotaoUseEffect