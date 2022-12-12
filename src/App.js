import './App.css';
import AnimatedRoutes from './Components/AnimatedRoutes';
import Header from './Components/header';
import Home from './Pages/Home';
import About from './Pages/About'
import Error from './Pages/Error';
import Pizze from './Pages/Pizze';
import Pizza from './Pages/Pizza';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
 
  return (
    <div className="App">
      
      <Router>
        <Header />

        <AnimatedRoutes home={<Home /> } about={<About />} pizze={<Pizze />} error={<Error />} pizza={<Pizza />} />
      </Router>
    </div>
  );
}

export default App;
