import Component1 from './components/component1';
import Component2 from './components/componet2';
import Tick from './components/time';

function App() {
  return (
    <div>
      <Component1/>
      <Component2 nama="Robby"/>
      <Component2 nama="Eka"/>
      <Tick/>
      <Tick/>
    </div>
  );
}

export default App;
