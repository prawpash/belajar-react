import Component1 from './components/component1';
import Component2 from './components/componet2';
import Tick from './components/time';
import Toggle from './components/toggle';
import ToggleWithParam from './components/toggleWithParam';
import LoginControl from './components/loginControl';
import MailBox from './components/mailbox';
import NumberList from './components/numberList';
import NameForm from './components/nameForm';
import FormMulti from './components/formMulti';

function App() {
  let id = 3;
  const numbers = [
    {'id':1,'value':'robby'},
    {'id':2,'value':'prawira'},
    {'id':3,'value':'eka'},
    {'id':4,'value':'pasha'},
    {'id':5,'value':'romadhon'}
  ];
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
      <h3>================================</h3>
      <NumberList numbers={numbers}/>
      <h3>================================</h3>
      <NameForm/>
      <h3>================================</h3>
      <FormMulti/>
    </div>
  );
}

export default App;
