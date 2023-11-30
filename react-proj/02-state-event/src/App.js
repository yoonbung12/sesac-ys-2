import './App.css';
import EventClass from './components/EventClass';
import EventFunc from './components/EventFunc';
import StateClass from './components/StateClass';
import StateFunc from './components/StateFunc';

function App() {
  return (
    <div >
      <StateClass />

      <StateFunc />
      <EventClass />

      <EventFunc />
    </div>
  );
}

export default App;
