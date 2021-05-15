
import './App.css';

import { BrowserRouter, Route} from "react-router-dom";
import Home from './components/HOME';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/navbar';
import Footer from './components/footer';
import Favorit from './components/favorit';
import React, {useState,useEffect} from 'react'

function App() {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    
    fetch('movies.json').then(
          response => response.json()).then 
                   (movies => setMovie(movies));
  }
  
  useEffect(()=> {getMovie()
  },[])

  const [favorites, setFavorites] = useState(0)
  const getFavorites =() =>{
    setFavorites(favorites+1)
  }

  const [favoriteMovie, setFavoriteMovie] = useState([])
  const getFavoriteMovie = (e) => {
    favoriteMovie.push(e)
    console.log(favoriteMovie)
  }
  return (
    <div>
    <BrowserRouter>
    
     {/* <Menu /> */}
     
     <Route exact path="/" ><Home movie={movie} getMovie={getMovie} favorites={favorites} getFavorites={getFavorites} getFavoriteMovie={getFavoriteMovie}/></Route>
          <Route path="/about" ><About movie={movie} getMovie={getMovie} favorites={favorites}/></Route>
          <Route path="/contact" ><Contact movie={movie} getMovie={getMovie} favorites={favorites}/></Route>
          <Route path="/favorit" ><Favorit movie={movie} getMovie={getMovie} favorites={favorites} favoriteMovie={favoriteMovie} /></Route>
          

          <Footer />
    </BrowserRouter>

    </div>
    

  );
}

export default App;
