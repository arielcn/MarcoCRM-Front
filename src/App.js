import logo from './logo.svg';
import './App.css';
import FormLogin from './Forms/FormLogin';
import ElegirUser from './Forms/ElegirUser';
import FormRegisterD from './Forms/FormRegisterD';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <FormRegisterD></FormRegisterD>
      </body>
    </div>
  );
}

export default App;
