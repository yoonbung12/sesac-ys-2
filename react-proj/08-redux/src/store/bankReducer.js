const ADDCOUNT = 'bank/ADDCOUNT'
const MINUSCOUNT = 'bank/MINUSCOUNT'

export const addcount = () => ({type: ADDCOUNT})
export const minuscount =() => ({type: MINUSCOUNT})

const initialValue = 0;

const bankReducer = (state=initialValue, action) => {
    const {payload, type} =action;
    
    switch(action.type) {
        case ADDCOUNT:
            return state + payload
        case MINUSCOUNT:
            return state - payload
        default:
            return state;

    }
};

export default bankReducer;