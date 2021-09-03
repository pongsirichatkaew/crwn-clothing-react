import Homepage from './pages/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// Switch wll return only route with noting else
// prevent from accidently render multiple components
const HatsPage = () => (
  <div>
    <h1>HAT PAGE</h1>
  </div>
);
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
