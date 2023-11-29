import PropTypes from "prop-types";

function TestFuncPropsEx({ title, author, price, type, text,valid}){
    return (
        <>
            {/* <div>내가 좋아하는 음식은????</div>
            <div >내가 좋아하는 음식은:<span className="food">{food}</span> </div> */}
            <div className="back">
                <h1>베스트 셀러</h1>
                <img src="/logo192.png"></img>
                <h2>책 제목: {title}</h2>
                <h3>작가:{author}</h3>
                <h3>가격:{price}</h3>
                <h3>구분:{type}</h3>
            </div>

            <div>

            </div>


        </>
    )
}
TestFuncPropsEx.defaultProps = {
    // food: "불고기",
    title: "아주 먼 옛날",
    author: "김유진",
    price: "10,000원",
    type: "판타지아",
}

TestFuncPropsEx.propTypes = {
    // food: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    


}

export default TestFuncPropsEx;