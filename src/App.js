import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import PortfolioScreen from './screens/PortfolioScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'

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
      </Switch>
    </Router>
  );
}

export default App;
