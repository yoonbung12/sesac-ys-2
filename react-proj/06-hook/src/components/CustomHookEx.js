import useToggle from "../hooks/useToggle";

export default function CustomHookEx() {

    const [isPopup, togglePopup] = useToggle(false);

    return (
        <>
            <h3> 커스텀 훅 공부</h3>
            {isPopup && <div>보여요?</div>}
            <button onClick={togglePopup} >토글</button>
        </>
    );   
}