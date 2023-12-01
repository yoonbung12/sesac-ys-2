import { Component } from "react";

class HandlerEx extends Component {
    state = {
        text: "Hello World"
        
    }
    clickBye = () => {
        this.setState({text: "Goodbye World!"} )
    }


    render() {
        return (
            <>
                <h3>실습 1번 </h3>
                <h3>{this.state.text}
                    <br />
                    <button onClick={this.clickBye}>클릭</button>
                    {/* <button onClick={}>빨간색</button>
                    <button onClick={}>파란색</button> */}
                </h3>

            </>
        )
    }
}

export default HandlerEx;