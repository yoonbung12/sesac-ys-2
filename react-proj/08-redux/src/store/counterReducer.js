const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

// 발생할 수 있는 action을 return하는 함수다.
// 만든 이유: action type의 이름이 바뀐다고 가정하면, 액션을 발생시킨 모든 곳(dispatch)에서 
// action.type을 다 변경해줘야한다. 이를 해결하기 위해 만들었다.
export const increase= () => ({type: INCREMENT})
export const decrease = () => ({type: DECREMENT})

const initialValue = { number: 100 };

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT": // 'INCREMENT' 상수 선언 전 ver3
    case INCREMENT:  // 'INCREMENT' 상수 선언 후 ver3.1
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;