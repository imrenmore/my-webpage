import kitty from './hellokitty.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kitty} className="Hellokitty" alt="logo" />
        <p>
          Hi there! My name is Imren and I am learning how to use React!
        </p>

      </header>
    </div>
  );
}

export default App;
