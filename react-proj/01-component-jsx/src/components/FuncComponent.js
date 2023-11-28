// // 함수형 컴포넌트
// const  FunctionComponent = () => {
//     return <div>함수형 컴포넌트 입니다.</div>
// };
import image from "./react-logo.png";

function FunctionComponent() {
        const text = "hello??";
        const name = "byeongwoo";
        const animal = "dog";
        const animalName = "로아";
        const a = 5;
        const b = 3;
        const title = "HelloWorld";

        const cal = () => {
            if(a + b === 8) {
                return "정답입니다."
            } else {
                return "틀렸다."
            }
        }

        const ifRenderTest = () => {
            if(name === 'byeongwoo') {
                return "안녕하소~~~";
            } else if (name === "richard"){
                return "안녕하세요 대표님...";
            } else {
                return "누구세요???";
            }
        };

        const style = { fontSize: "20px", color: "red" };


    return(
        <>
            {/* 1. 하나의 태그만 반환 할수 밖에 없다(return). */}
            <div>함수형 컴포넌트입니다.1</div>
            <div>함수형 컴포넌트입니다.2</div>

            {/* 2. js문법 사용 가능(변수)  */}
            <h3>코딩온 {text}</h3>
            
            {/* 2. js문법 사용 가능 (삼항 연산자를 조건에 따른 렌더링 (간단))*/}
            <h4>{name === 'byeongwoo' ? "안녕하세요!!~~" : "늬슈??"   }</h4>
            
            {/* 2-1. 복잡한 조건을 이용하고 싶은면? -> 위에서 함수로 만들고 사용 */}
            <h4>{ifRenderTest()}</h4>

            {/* 2-2. 조건에 따른 렌더링 ( && ) */}
            <h5>{name === "richard" && "안녕하십니까??????"}</h5>

            {/* 3. inline style 적용 방법 > style 속성값으로 객체 전달 */}
            {/* <div style="font-size: 20px, color: red"></div> */}
            <div style={{ fontSize: '20px', color: 'red'  }}>HELLOWORLD</div>
            <div style={style}>hello</div>

            {/* 4. class 와 onclic을 jsx에서 사용하기 */}
            {/* <div class="" onClick="함수()">원래 html에서 하던 방식</div> */}
            <div className="test-css">jsx에서 css 사용하기(className)</div>

            {/* html에서는 함수를 "호출", jsx에서는 함수를 선언 */}
            <button onClick={ () => {
                console.log("helloWWWWW");
            } }>
                버튼
            </button>

            {/* 5. 종료 태그 필수 */}
            <br />
            {/* / 경로가 public 폴더 안이다.  */}
            <img src=" /logo192.png" />

            {/* src 내부의 이미지 사용할 경우 -> 위에서 이미지를 import 해오기 */}
            <img src={image} />


            {/* 실습1  */}
            <h3>제 반려 동몰의 이름은 {animalName}입니다.
                {animalName}은 {animal} 입니다.
            </h3>

            {/* 실습2  */}
            <h3>{ cal()}</h3>

            {/* 실습3 */}
            <div>{ a > b  && "a가 b보다 큽니다."  } </div>

            {/* 실습4 */}
            <div className="wrapper">
                <div>
                  <p>{title}</p>
                </div>
                <div>
                    ID:<input />
                </div>
                <div>
                    Pw:<input />
                </div>
            </div>


        </>
    );
}


export default FunctionComponent;