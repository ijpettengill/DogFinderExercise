import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import DogList from './DogList';
import DogName from './DogName';

/* App renders routes
props are from index.js
*/

function App({ props }) {
  const { dogs } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p>Hello World!</p>
        </Route>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name">
          <DogName dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;