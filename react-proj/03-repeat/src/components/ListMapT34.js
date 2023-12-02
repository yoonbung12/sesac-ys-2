import { useState } from "react";
function ListMapT34() {

    // 테스트로 넣어놓은 데이터
    const data = [
        {id: 1, title: "제목이다.", writer: "누구?"},
    ]

    const [list, setList] = useState(data);
    // const [id, setId] = useState("");
    const [title, setTitle] = useState("")
    const [writer, setWriter] = useState("");

    const addData = (e) => {
        const newData = {id: list.length +1,  title: title, writer: writer};
        const newList = list.concat(newData);

        setList(newList);
    }

    return(
        <>
            <div>실습 3,4 </div>
            <fieldset>
            <label>작성자:</label>
                <input type="" 
                        value={writer}
                        onChange={(e) => {
                            setWriter(e.target.value);
                        }}
                />
                <label>제목: </label>
                <input type=""  
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                />
                <button type="button" onClick={addData}>작성</button>
            </fieldset>
            
            {/*  작성자, 검색어 , 검색(버튼) */}
            <select >
                <option value="">작성자</option>
                <option value="">검색어</option>
            </select>
            <input type="" />
            <button type="button">검색</button>
            <table style={{ width: '500px'  ,border: '1px solid black' , borderCollapse: 'collapse'}}>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map ((value) => {
                        return <tr key={value.id} >
                            <td style={{ border: '1px solid black' }}>{value.id}</td>
                            <td style={{ border: '1px solid black' }}>{value.title}</td>
                            <td style={{ border: '1px solid black' }}>{value.writer}</td>
                        </tr>  
                    })}

                </tbody>
            </table>
        </>
    )
}

export default ListMapT34;