import './App.css';
import {HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import PortfolioScreen from './screens/PortfolioScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import HeianProjectScreen from './screens/HeianProjectScreen'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen/>
        </Route>

        <Route exact path="/portfolio">
          <PortfolioScreen/>
        </Route>

        <Route exact path="/about">
          <AboutScreen/>
        </Route>

        <Route exact path="/contact">
          <ContactScreen/>
        </Route>

        <Route exact path="/heian-canada">
          <HeianProjectScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
