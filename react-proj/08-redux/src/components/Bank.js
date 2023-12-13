import { useState } from "react"


export const BankInput = ({money, onAddcount, onMinuscount}) => {
    const [input, setInput] = useState("")


    const plus = () => {
        onAddcount(Number(input))
        setInput("")
    }
    const minus =() => {
        onMinuscount(Number(input))
        setInput("")
    }    
    return (
        <>
            <div>
                <h1>코딩온 은행</h1>
                <h3>잔액:{money} </h3>
                <input type="number" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={plus} >입금</button>
                <button onClick={minus}>출금</button>
            </div>
        </>
    )
}