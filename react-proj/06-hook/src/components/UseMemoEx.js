import { useMemo, useState } from "react"

// useMemo : Rendering 할 때, 불필요한 연산을 방지
export default function UseMemoEx() {
    const [text, setText] = useState(''); // 빈 문자열
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    

    // [before]
    // count state가 변경되지 않아도, rendering 될 때마다 다시 연산을 함. => 비효율적
    //  => count가 변경될 때만 연산을 하도록 하고 싶음! => useMemo
    // const calc = () => {
    //     console.log("calc....");
    //     return count * 2;
    // }

    // [After]
    // useMemo(콜백함수, 의존성 배열)
    // useMemo : 불필요한 연산을 방지, 값을 기억하고 있고, count의 변경이 있을 때만 다시 연산하여 calc에 담아둔다.
    const calc = useMemo(() => {
        console.log("calc......")
        return count * 3;
    }, [count]);

    // const calcValue = calc();

    


    return (
        <>
        <h3>useMemo 공부</h3>
        <div>count : {count}
            <button type="button" onClick={() => setCount(count +1)} >+1</button>
        </div>
        {/* useMemo를 사용하지 않을 경우 */}
        {/* <div>cale : {calcValue}</div> */}
        {/* useMemo를 사용할 경우 */}
        <div>calc: {calc} </div>
            <input type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} />
        </>
    )
}