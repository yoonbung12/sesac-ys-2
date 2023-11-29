import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FuncComponent';
import FuncPropsEx from './components/FuncPropsEx';
import Section from './components/Section';
import ClassPropsEx from './components/ClassPropsEx';
import TestFuncPropsEx from './components/TestFuncPropsEx';
import TestClassProps from './components/TestClassProps';

function App() {
  return (
    <div >

        {/* <FunctionComponent /> */}
        {/* <FunctionComponent></FunctionComponent> */}
        {/* <ClassComponent /> */}
        <FuncPropsEx title="SeSAC" content="Hello World" number={5} />
        {/* <FuncPropsEx number={5} /> */}
        
        {/* <Section title="SeSAC영역"  >
          <div>SeSAC 영역의 content입니다.</div>  
        </Section>
        <Section title="코딩온 영역" >
          <h5>코딩온 영역의 content입니다.</h5>
        </Section> */}
{/*         
        <ClassPropsEx title="SeSAC Class" content="hello Class" number={5}>
          <h2>클래스 Props 부분 입니다.</h2>
        </ClassPropsEx> */}

        {/* <TestFuncPropsEx  content="">
          <h3>실습 부분이다.</h3>  
        </TestFuncPropsEx> */}

        {/* <TestFuncPropsEx ></TestFuncPropsEx>
        <TestFuncPropsEx text="일단 기본" ></TestFuncPropsEx> */}

        <TestClassProps valid="콘솔띄우기 성공"></TestClassProps>

    </div>
  );
}




export default App;
