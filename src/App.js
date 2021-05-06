
import './App.css';

import { BrowserRouter, Route} from "react-router-dom";
import Home from './components/HOME';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/navbar';
import Footer from './components/footer';
import Favorit from './components/favorit';

function App() {
  return (
    <div>
    <BrowserRouter>
    
     <Menu />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/favorit" component={Favorit} />

          <Footer />
    </BrowserRouter>

    </div>
    

  );
}

export default App;
