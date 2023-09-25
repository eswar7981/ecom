import React, { useEffect } from "react";
import "./HomeBody.css";
import { useState, createContext } from "react";
const HomeBody = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const [error,setError]=useState(null)

  useEffect(() => {
    const getMovieData = async () => {
      setIsLoding(true);
       setError(null)

      try {
        const response = await fetch("https://swapi.dev/api/films/");

        if (!response.ok) {
          setIsLoding(false);
          throw new Error("something went wrong retrying...");
        }
        const data = await response.json();
        const transformMovies = data.results.map((moviedata) => {
          return {
            id: moviedata.episode_id,
            title: moviedata.title,
            openingText: moviedata.opening_crawl,
          };
        });

        setMovies(transformMovies);
      } catch (error) {
        setError(error.message);
      }
      setIsLoding(false);
    } ;getMovieData()


  }, []);

  return (
    <div>
      <div className="cont">
       
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
              </div>
            </div>
          </li>
        ))}
        <div className="load">
        {isLoading && <div class="loader"></div>}
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



