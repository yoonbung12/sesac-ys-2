import {useState} from "react";
function HandlerFunc() {
    const [color, setColor] = useState("black");
    const [text, setText] = useState("검정색 글씨");
    const[msg, setMsg] = useState("안녕하세요");
    const[btn, setBtn] = useState("사라져라");
    const [name, setName] = useState("");
    const selectList = ["사과", "바나나", "복숭아", "딸기"];
    const [select, setSelect] = useState("");

    const handleEnter = (e) => {
        if(e.key == "Enter") {
            console.log("엔터 눌렀네");
        }
    }
    const handleChangeSelect = (e) => {
        setSelect(e.target.value);
        console.log(e.target.value);
    }

    const clickRed = (e) => {
        setColor("Red");
        setText("빨간색 글씨");
    }
    const clickBlue = (e) => {
        setColor("blue");
        setText("파란색 글씨");
    }

    const clickRemove = (e) => {
        if(btn === "사라져라") {
            setMsg("");
            setBtn("보여라");
        } else {
            setMsg("안녕하세요");
            setBtn("사라져라");
        }

    }

    return (
        <>
            <h3>실습 2번</h3>
            <h2 style= {{color: color}}>
                {text}
                <button onClick={clickRed}>빨간색</button>
                <button onClick={clickBlue}>빨간색</button>
            </h2>

            <h3>실습 3번</h3>
            <h2 >
                <button onClick={clickRemove}>{btn}</button>
                {msg}
            </h2>

            <h3>실습4번</h3>
            <form>
            <label>과일:</label>
                <select id="fruit" onChange={handleChangeSelect} >
                    <option value="사과">사과</option>
                    <option value="바나나">바나나</option>
                    <option value="복숭아">복숭아</option>
                    <option value="딸기">딸기</option>
                </select>
                <label>배경색:</label>
                <select id="color">
                    <option value="black">검</option>
                    <option value="yellow">노</option>
                    <option value="red">빨</option>
                    <option value="blue">파</option>
                </select>
                <label>글자색:</label>
                <select id="color">
                    <option value="black">검</option>
                    <option value="yellow">노</option>
                    <option value="red">빨</option>
                    <option value="blue">파</option>
                </select>
                <br />
                <div> 내용:
                <input type="text" 
                        value={name}
                        onChange={(e) => {
                            console.log(e.target);
                            setName(e.target.value);
                        }}
                        onKeyDown={handleEnter}/>
                </div>

            </form>
        </>
    )
}

export default HandlerFunc;