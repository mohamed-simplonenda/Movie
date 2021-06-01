
import './App.css';

import { BrowserRouter, Route} from "react-router-dom";
import Home from './components/HOME';
import About from './components/about';
import Contact from './components/contact';
import Menu from './components/navbar';
import Footer from './components/footer';
import Favorit from './components/favorit';
import React, {useState,useEffect} from 'react'
import PlayPage from './components/play'
import MoviePage from './components/moviepage'
import SeriePage from './components/seriepage'
import axios from 'axios'
import Admin from './components/admin';
import Update from './components/update';
// import firebase from "./firebase";
function App() {
  const urlMovie='https://moviapp-91957-default-rtdb.firebaseio.com/posts.json'
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    
      axios.get(urlMovie).then((response) => {
      setMovie( response.data);
      console.log("response:", response);

    });
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
  const [play, setPlay] = useState([])
  const getPlay =(e) =>{
    play.push(e)
    console.log(play)
    
  }
  const [input , setInput] = useState("")
  const getInput =  (event) => {
      
      setInput(event.target.value)
          }
        const removeFavoriteMovie=(el)=>{
          let index = favoriteMovie.indexOf(el)
           favoriteMovie.splice(index,1)
           setFavoriteMovie(favoriteMovie)
           setFavorites(favorites-1)


        }  
        const removeFavoriteMovieAll=()=>{
          let length = favoriteMovie.length
           favoriteMovie.splice(0,length)
           setFavoriteMovie(favoriteMovie)
           setFavorites(favorites-length)


        }  
  
  return (
    <div>
    <BrowserRouter>
    
     {/* <Menu /> */}
       
          <Route exact path="/" ><Home movie={movie} getMovie={getMovie} favorites={favorites} getFavorites={getFavorites} getFavoriteMovie={getFavoriteMovie} getPlay={getPlay} input={input} getInput={getInput}/></Route>
          <Route path="/App-Movie/movie" ><MoviePage movie={movie} getMovie={getMovie} favorites={favorites} getFavorites={getFavorites} getFavoriteMovie={getFavoriteMovie} getPlay={getPlay} input={input} getInput={getInput}/></Route>
          <Route path="/App-Movie/serie" ><SeriePage movie={movie} getMovie={getMovie} favorites={favorites} getFavorites={getFavorites} getFavoriteMovie={getFavoriteMovie} getPlay={getPlay} input={input} getInput={getInput}/></Route>
          <Route path="/App-Movie/about" ><About movie={movie} getMovie={getMovie} favorites={favorites}/></Route>
          <Route path="/App-Movie/contact" ><Contact movie={movie} getMovie={getMovie} favorites={favorites}/></Route>
          <Route path="/App-Movie/favorit" ><Favorit movie={movie} getMovie={getMovie} favorites={favorites} favoriteMovie={favoriteMovie} input={input} removeFavoriteMovie={removeFavoriteMovie} removeFavoriteMovieAll={removeFavoriteMovieAll}/></Route>
          <Route path="/App-Movie/play" ><PlayPage play={play}  movie={movie} getFavorites={getFavorites} getFavoriteMovie={getFavoriteMovie} getPlay={getPlay} /></Route>
          <Route path="/App-Movie/admin" ><Admin movie={movie} setMovie={setMovie} /></Route>
          <Route path="/update"> <Update/></Route>
          
    </BrowserRouter>

    </div>
    

  );
}

export default App;
