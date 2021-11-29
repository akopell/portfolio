import './styles/App.css';
import Routes from './Routes';
import { Navbar, Landing, About, Projects } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Landing />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
