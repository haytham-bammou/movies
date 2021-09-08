import "./App.css";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Details from "./component/Details";
import MovieState from "./context/MovieState";
function App() {
  return (
    <MovieState>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
          </Switch>
        </Router>
      </div>
    </MovieState>
  );
}

export default App;
