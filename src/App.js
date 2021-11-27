import './styles/App.css';
import Routes from './Routes';
import { Navbar, Landing } from './components';

function App() {
  return (
    <div className='App'>
      <Landing />
      <Navbar />
      {/* <Routes /> */}
    </div>
  );
}

export default App;
