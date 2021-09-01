import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import Header from './components/Header';
import Form from './components/Books/Form';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact key="/">
        <Books />
        <Form />
      </Route>
      <Route path="/categories" exact key="/categories"><Categories /></Route>
    </Switch>
  </Router>
);

App.displayName = 'App';

export default App;
