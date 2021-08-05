import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import Booth from './components/booth';
import Footer from './components/footer';

function App() {
  return (
    <main className='container-fluid'>
      <Navbar />
      <Switch >
        <Route path="/welcome" component={Welcome} />
        <Route path="/booth" component={Booth} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
