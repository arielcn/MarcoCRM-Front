import logo from './logo.svg';
import './App.css';
import FormLogin from './FormLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <FormLogin></FormLogin>
      </body>
    </div>
  );
}

export default App;
