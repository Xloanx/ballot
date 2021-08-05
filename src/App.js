import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import ContestantsDetails from './components/contestantsDetails';
import Booth from './components/booth';
import Footer from './components/footer';

function App() {
  return (
    <main className='container-fluid'>
      <Navbar />
      <Switch >
        <Route path="/welcome" component={Welcome} />
        <Route path="/booth/:contestantId" component={ContestantsDetails} />
        <Route path="/booth" render={props => <Booth {...props} />} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
