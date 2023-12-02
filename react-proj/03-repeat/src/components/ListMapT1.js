import{useState, ustState} from "react";
function ListMapT1() {
    //  list 받아야제
    const user = [
        {name: 'bong', mail: "ssss@naver.com"},
    ]

    const [list, setList] = useState(user);
    const [newName, setNewName] = useState("이름");
    const [newMail, setNewMail] = useState("이메일");

    const addUser = (e) => {
        const newUser = {name: newName, mail: newMail};
        const newList = list.concat(newUser);

        setList(newList);
        // setNewName("");
        // setNewMail("");
    }

    const deleteUser = (name) => {
        const newList = list.filter((value) => {
            return value.name != name;
        });
        setList(newList);
    } 

    return (
        <>

                <input type="text" value={newName}
                                    onChange={(e) => {
                                        setNewName(e.target.value);
                                    }}
                />
                <input type="text" value={newMail}
                                    onChange={(e) => {
                                        setNewMail(e.target.value);
                                    }}
                />
                <button type="button" onClick={addUser}>등록</button>
            <ul>
                {list.map((value) => {
                    return <li
                            key={value.name}
                            onDoubleClick={() => 
                                {deleteUser(value.name)
                            }}
                    >{value.name}:{value.mail}</li>
                })}
                <li></li>
            </ul>
            
        </>
    )
}

export default ListMapT1;