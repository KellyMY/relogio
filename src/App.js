import logo from './logo.svg';
import './App.css';
import Relogio from './Relogio';

function App() {
  function Relogio(){
    const text = "Hello";
    alert('teste');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <input type="button" value="click me" onClick={Relogio}/>
      </header>
    </div>
  );
}

export default App;
