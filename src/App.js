import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

import { createBrowserHistory } from "history";
import ContactPage from './Pages/ContactPage';
import ContactDetails from './Pages/ContactDetails';
const history = createBrowserHistory();





function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Link className="App-link" to="/contact">Contacts</Link>
        <Switch>
          <Route path="/" exact><h1>Home Sweet Home</h1></Route>
          <Route path="/contact" component={ContactPage} exact />
          <Route path="/contact/:id" component={ContactDetails} exact />
          {/* <Route path="/car/edit/:carId" component={CarEdit} exact />
            <Route path="/car/edit" component={CarEdit} exact /> */ }
        </Switch>

      </Router>

    </div>
  );
}

export default App;
