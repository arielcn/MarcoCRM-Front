import logo from './logo.svg';
import './App.css';
import FormLogin from './Forms/FormLogin';
import ElegirUser from './Forms/ElegirUser';
import FormRegisterD from './Forms/FormRegisterD';
import FormRegisterV from './Forms/FormRegisterV';
import CodigoEmpresa from './Forms/CodigoEmpresa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <FormRegisterV></FormRegisterV>
      </body>
    </div>
  );
}

export default App;
