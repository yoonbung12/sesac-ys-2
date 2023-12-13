import { useDispatch, useSelector } from "react-redux";
import { BankInput } from "../components/Bank";
import { addcount, minuscount } from "../store/bankReducer";
export function BankContainer() {
    const money = useSelector((state) => state.money);
    const dispatch = useDispatch();

    return <BankInput money={money}
            onAddcount = {(payload) => dispatch({...addcount(), payload: payload})}
            onMinuscount = {(payload) => dispatch({...minuscount(), payload: payload})}
    
    
    />
}
