import Component1 from './components/component1';
import Component2 from './components/componet2';
import Tick from './components/time';
import Toggle from './components/toggle';
import ToggleWithParam from './components/toggleWithParam';

function App() {
  let id = 3;
  return (
    <div>
      <h1>ini stateless</h1>
      <h3>================================</h3>
      <Component1/>
      <Component2 nama="Robby"/>
      <Component2 nama="Eka"/>
      <h3>================================</h3>
      <h1>ini Statefull</h1>
      <Tick/>
      <Tick/>
      <Toggle/>
      <ToggleWithParam btName="Tests" id={id}/>
    </div>
  );
}

export default App;
