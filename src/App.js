import Header from './component/Header'
import { Switch, Route } from 'react-router-dom';

import Homepage from './component/Homepage';
import Gallery from './component/Gallerie';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route path='/' component={ Gallery } />
      </Switch>
    </div>
  );
}

export default App;
