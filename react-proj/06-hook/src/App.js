import { useState } from 'react';
import './App.css';
import CustomHookEx from './components/CustomHookEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseCallbackPra from './components/UseCallbackPra';
import UseMemoEx from './components/UseMemoEx';
import UseMemoPra from './components/UseMemoPra';
import UseReducer from './components/UseReducer';

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <div >
      {/* <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={postId}/>
      <button  type="button" onClick={() => setPostId(postId + 1)}>+1</button>

      <hr />
      <UseReducer />

      <CustomHookEx />

      <hr /> */}

      {/* <UseMemoPra />
      <hr /> */}
      
      <UseCallbackPra />
    </div>
  );
}

export default App;
