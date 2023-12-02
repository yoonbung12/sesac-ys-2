import React, { Component, createRef } from "react";

class ClassRef extends Component {

    input2 = React.createRef();

    // 콜백함수를 이용하여 ref를 지정했을 때, ref 변수를 사용하는 방법
    focusInput = () => {
        this.input.focus();
    };

    focustInput2 = () => {
        this.input2.current.focus();
    };


    render() {
        return (
            <>

            {/* 콜백함수를 이용하여 ref 지정 */}
                <input type="text" ref={(ref) => {   // 콜백 함수사용
                    // ref에 콜백함수를 넘길 때 첫번째 매개변수는 
                    // ref 걸려 있는 요소를 담고 있다. 
                    this.input = ref;
                }} />
                
                <button type="button" onClick={this.focusInput} >클래스에서 REF버튼(버전1)</button>


                <br />
                <h2>변수 사용해서 했다.(focustInput2)</h2>
                 <input type="text" ref={this.input2} />
                 <button type="button"  onClick={this.focustInput2} >클래스에서 REF버튼(버전2)</button>

            </>
        );
    }
}

export default ClassRef;