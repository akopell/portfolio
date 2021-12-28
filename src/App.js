import './styles/App.css';
import { Navbar, Landing, About, Projects, Contact } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Landing />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
