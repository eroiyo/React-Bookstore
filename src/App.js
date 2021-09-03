import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Header from './components/Header';
import BookSection from './components/Books/BookSection';

const App = () => (
  <Router>
    <div className="panel">
      <Header />
      <Switch>
        <Route path="/" exact key="/">
          <BookSection />
        </Route>
        <Route path="/categories" exact key="/categories"><Categories /></Route>
      </Switch>
    </div>
  </Router>
);

App.displayName = 'App';

export default App;
