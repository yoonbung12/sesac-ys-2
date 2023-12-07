import styled from "styled-components";
// css의 네이밍 중복을 방지
const Container = styled.div`
    display: flex;

    /* @media  screen and (max-width: 768px) {

    } */
`; 

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.color || 'black'} ;

    &:hover {
        transform: scale(1.1);
    }
`;

export default function StyledComponent() {
    return (
        <>
            <Container>
                <Box color="red" />
                <Box color="orange" />
                <Box color="yellow" />
                <Box color="green"/>
                <Box />
                <Box />
            </Container>
    {/* // 참고. 컴포넌트 코드 */}
    <div className="larva">
      <div className="body body1">
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>

    </div>

        </>
    );
}