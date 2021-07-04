import logo from './logo.svg';
import './App.css';
import plus from "./component/plus";
import About from "./component/About";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <Link to="/plus">
          <button> 호옴 </button>
        </Link>
        <Link to="/About">
          <button> 어바웃 </button>
        </Link>
        </div>
        <Route path="/Home" component={plus} />
        <Route path="/About" component={About} />
      </header>
    </div>
  );
}

export default App;
