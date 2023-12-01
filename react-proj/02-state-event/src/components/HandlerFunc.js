import {useState} from "react";
function HandlerFunc() {

    const [text, setText] = useState("검정색 글씨");
    const[msg, setMsg] = useState("안녕하세요");
    const[btn, setBtn] = useState("사라져라");
    const [name, setName] = useState("");
    
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

    // 실습 4번
    const[fruit, setFruit] = useState("/apple.png");
    const[backColor, setBackColor] = useState("white");
    const [color, setColor] = useState("black");    

    const handleEnter = (e) => {
        if(e.key == "Enter") {
            console.log("엔터 눌렀네");
        }
    }
    const handleChangeSelect = (e) => {
        console.log(e.target.value);
        setFruit(e.target.value);

    }

    const changeBack = (e) => {
        console.log(e.target.value);
        setBackColor(e.target.value);
    }

    const changeColor = (e) => {
        console.log(e.target.value);
        setColor(e.target.value);
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
            <div className="container">
            <form>
            <label>과일:</label>
                <select  onChange={handleChangeSelect} >
                    <option value="./apple.png">사과</option>
                    <option value="/banana.png">바나나</option>
                    <option value="/peach.png">복숭아</option>
                    <option value="/straw.png">딸기</option>
                </select>
                <label>배경색:</label>
                <select onChange={changeBack}>
                    <option value="black">검</option>
                    <option value="yellow">노</option>
                    <option value="red">빨</option>
                    <option value="blue">파</option>
                </select>
                <label>글자색:</label>
                <select id="color" onChange={changeColor}>
                    <option value="black">검</option>
                    <option value="yellow">노</option>
                    <option value="red">빨</option>
                    <option value="blue">파</option>
                </select>
                <br />
                <div> 내용:
                <input type="text" 
                        onChange={(e) => {
                            console.log(e.target);
                            setText(e.target.value);
                        }}
                        onKeyDown={handleEnter}/>
                </div>

            </form>
            <img className="img" src={fruit} style={{width: '300px', height: '300px' }} ></img>
            <div style={{backgroundColor: backColor, color: color}}>{text}</div>
            </div>
            
        </>
    )
}

export default HandlerFunc;