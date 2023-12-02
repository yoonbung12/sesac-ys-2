import {useRef} from "react";

function FuncRef() {
    

    const input = useRef();
    const localVar = useRef(0);
    // const localVar = 0;

    const focusInput = () => {
        input.current.focus();
    };

    const plusLocalVar = () => {
        localVar.current ++;
        console.log(localVar.current);
    }
    
    return(
        <>
            <input type="text" ref={input} />
            <button type="button" onClick={focusInput}>BTN</button>
            <div>
                {localVar.current}
                <button type="button" onClick={plusLocalVar}>pluss</button>
            </div>

        </>  
    ) 
}

export default FuncRef;