import { useState} from "react";

function StateFunc () {

    // useState는 배열을 반환 -> 그 배열을 구조분해 하여 number 와 setNumber 선언.
    // [state변수, state를 변경시키는 함수] = useState(state 초기값)
    // 수업
    const[ number, setNumber] = useState(0);
    const[ text, setText] = useState("hello");

    return (
        <>
            <h3>함수형 컴포넌트 state 공부</h3>
            <div>
                number state value {number} {" "}
                <button onClick = {() => {
                    // 아래처럼 하면 +2가 되지 않는다. stateClass 보면서 이해 해보기
                    // setNumber(number + 1);
                    // setNumber(number + 1);

                    setNumber((prevNumber) => prevNumber + 1 );
                    setNumber((prevNumber) => prevNumber + 1 );
                }}> +2 </button>
            </div>
            <div>{text}</div>
        </>
    );

    //실습
    // const [pnum, increase] = useState(0); // 초기값을 09으로 설정
    // const [mnum, decrease] = useState(pnum);

    // return (
    //     <>
    //         <h2>함수형 실습 state</h2>
    //         <div>
    //             number: {pnum}
    //             <button onClick = {() => {
    //                 increase(pnum + 1);
    //             }}> +1</button>
    //         </div> 
    //         <div>
    //             number: {mnum}
    //             <button onClick= {() => {
    //                 decrease(( prevNumber) => prevNumber -1);
    //                 decrease(( prevNumber) => prevNumber -1);
    //             }}>-2</button>
    //         </div>       
    //     </>
    // )
}

export default StateFunc;