import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about">{ About }</Route>
        <Route exact path="/projects">{ Projects }</Route>
        <Route exact path="/contact">{ Contact }</Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
