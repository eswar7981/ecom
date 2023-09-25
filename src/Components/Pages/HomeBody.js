import React, { useEffect } from "react";
import "./HomeBody.css";
import { useState, createContext } from "react";
import AddNewMovie from "./AddNewMovie";
const HomeBody = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [error,setError]=useState(null)

  useEffect(() => {
    const getMovieData = async () => {
      setIsLoding(true);
       setError(null)

      try {
        const response = await fetch("https://movies-ae6a0-default-rtdb.firebaseio.com/movies.json");

        if (!response.ok) {
          setIsLoding(false);
          throw new Error("something went wrong retrying...");
        }
        const data = await response.json();

        const loadedMovies=[];


        for(const key in data){
          loadedMovies.push({
            id:key,
            title:data[key].title,
            openingText:data[key].openingText,
            releaseDate:data[key].releaseDate,
          })
        }

        setMovies(loadedMovies);
      } catch (error) {
        setError(error.message);
      }
      setIsLoding(false);
    } ;getMovieData()


  }, []);


   async function deleteMovieHandler(e,id){
    e.preventDefault()
    const response1=await fetch('https://movies-ae6a0-default-rtdb.firebaseio.com/movies.json',{
   method:'Delete',
   id:id
    })

  }

  return (
    <div>
      <div className="cont">
       <AddNewMovie></AddNewMovie>
        {movies.length>0 && movies.map((event) => (
          <li key={event.id}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"} }>{event.title}</h1>
                </div>
                <div className="col">
                  <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>{event.openingText}</h1>
                </div>
                <div className="col">
                  <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>{event.releaseDate}</h1>
                </div>
                <div className="col">
                  <button onClick={(e)=>(deleteMovieHandler(e,event.id))}>Delete</button>
                </div>
              </div>
            </div>
          </li>
        ))}
        <div className="load">
        {isLoading && <div><div class="loader"></div><h1>fetching movies</h1></div>}
        </div>
        {error && <p>{error}</p>}
      </div>
      <div className="cont2">
        <h1>GENERICS </h1>
      </div>
    </div>
  );
};

export default HomeBody;



