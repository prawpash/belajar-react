import Component1 from './components/component1';
import Component2 from './components/componet2';
import Tick from './components/time';
import Toggle from './components/toggle';
import ToggleWithParam from './components/toggleWithParam';
import LoginControl from './components/loginControl';
import MailBox from './components/mailbox';

function App() {
  let id = 3;
  const unreadMessage = ['helo','hello','hellow'];
  return (
    <div>
      <h1>ini stateless</h1>
      <h3>================================</h3>
      <Component1/>
      <Component2 nama="Robby"/>
      <Component2 nama="Eka"/>
      <Component2/>
      <h3>================================</h3>
      <h1>ini Statefull</h1>
      <Tick/>
      <Tick/>
      <Toggle/>
      <ToggleWithParam btName="Tests" id={id}/>
      <h3>================================</h3>
      <LoginControl isLoggedIn={false}/>
      <MailBox unreadMessage={unreadMessage}/>
    </div>
  );
}

export default App;
