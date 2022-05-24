import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import ListRegister from './Components/ListRegister/ListRegister';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { PersonStorage } from './context/PersonContext';

function App() {
  return (
    <div>
      <PersonStorage>
        <Home />
        <Register />
        <ListRegister />
        <Footer />
      </PersonStorage>
    </div>
  );
}

export default App;
