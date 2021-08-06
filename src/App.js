import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ContestantsForm from './components/contestantsForm';
import ContestantsDetails from './components/contestantsDetails';
import Booth from './components/booth';
import Footer from './components/footer';
import Welcome from './components/welcome';

function App() {
  return (
    <main className='container-fluid'>
      <Navbar />
      <Switch >
        <Route path="/contestantsForm/:contestantId" component={ContestantsForm} />
        
        <Route path="/contestantsDetails/:contestantId" component={ContestantsDetails} />
        <Route path="/booth" render={props => <Booth {...props} />} />
        <Route path="/" component={Welcome} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
