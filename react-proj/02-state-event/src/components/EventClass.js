import { Component } from "react";

class EventClass extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            msg: "HIHI",
        };

        // 함수 선언문을 사용하여 메소드를 만들 때
        // 메소드 내부에서 클래스의 this를 사용하고 싶은 경우, 생성자 내에서 this를 bind 해주는 작업을 거쳐야 함.
        // handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
        this.handleOnClick = this.handleOnClick.bind(this);
        
    }



    // 함수 선언문을 사용하여 메소드를 정의
    // 함수 내부에서 자체적인 this를 만들 수 있고, this가 클래스의 this가 아니게 됨.
    // 해결법 1. 생성자 내부에서 this를 원하는 것으로 바인딩.
    // 해결볍 2. 함수 표현식을 사용한다.
    // 함수 선언문은 동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정된다.
    handleOnClick() {
        this.setState({msg: "bye~~"}); 



    }

    // 함수 표현식은 함수가 선언될 때 this를 결정 지어버린다. 함수를 선언하는 코드를 읽을 때 this 가 결정된다.
    handleOnClickHello =(e) => {
        console.log(e);
        this.setState({msg: "hello"});
    }


    // 함수 표현식
    // this 
    handleOnClick2 = () => {
        console.log(this);
        this.setState({msg: "bye~~"});

    }
    
    render() {
        return (
        <>
            <h3>클래스형 컴포넌트 event handling 공부</h3>
            
            {this.state.msg} 
            <button onClick = {this.handleOnClick} >
                잘가라~~
            </button>
            <button onClick = {this.handleOnClickHello} >
                안뇽
            </button>

            <button onClick={(e) => { 
                // e 는 리액트 합성 이벤트 객체. 합성 이벤트에 대한 모든 정보를 담고 있다.
                // 그 중에 target이라는 거에 접근을 하면, 이벤트가 걸린 태그를 확인할 수 있다...
                console.log(e); 
                console.log(e.type);
            }
        
            }>test</button>


        </>
        );
    }
}

export default EventClass;