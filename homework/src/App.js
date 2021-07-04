import './App.css';
import Home from "./component/Home";
import About from "./component/About";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path='/' exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  )
}

export default App;