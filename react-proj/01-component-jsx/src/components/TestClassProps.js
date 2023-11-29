import { Component } from "react";
import PropTypes from "prop-types";

class TestClassProps extends Component {

    render(){
        return (
            <>
                <div>텍스트: {this.props.text}</div>
                <button type="button" onClick={() => console.log(this.props.valid)}>
                    유효성 검사.
                </button>
            </>
        );
    }

    static defaultProps = {
        text: "이건 기본 text props 입니다."
    };
    static propsTypes = {
        text: PropTypes.string.isRequired,
    };


}

export default TestClassProps;