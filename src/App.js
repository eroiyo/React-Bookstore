import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Header from './components/Header';
import BookSection from './components/Books/BookSection';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact key="/">
        <BookSection />
      </Route>
      <Route path="/categories" exact key="/categories"><Categories /></Route>
    </Switch>
  </Router>
);

App.displayName = 'App';

export default App;
