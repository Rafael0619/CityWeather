
import './App.css';
import {BrowserRouter, Switch , Route} from "react-router-dom"

import Home from './components/Home';
import CityDetails from './views/CityDetails';
import Error404 from './views/Error404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/details/:name" exact>
        <CityDetails/>
        </Route>
        <Route component={Error404} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
