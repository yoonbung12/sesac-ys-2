import styled from "styled-components";
// css의 네이밍 중복을 방지
const Container = styled.div`
    display: flex;
`; 

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.color || 'black'}
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
        
        </>
    );
}