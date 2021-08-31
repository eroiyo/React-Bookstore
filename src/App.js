/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Books } from './components/Books/Books';
import Categories from './components/Categories/Categories';
import { Header } from './components/Header';

export const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact key="/"><Books /></Route>
      <Route path="/categories" exact key="/categories"><Categories /></Route>
    </Switch>
  </Router>
);
