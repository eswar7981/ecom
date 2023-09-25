import React from "react";
import './AddNewMovie.css';
import {useState} from "react"
const AddNewMovie = () => {
    const [newMovie,setNewMovie]=useState({title:'',openingtext:'',releasedate:''})
    
    
    const addtitleHandler=(e)=>{
        setNewMovie((prev)=>{
            return{
                ...prev,['title']:e.target.value
            }
            
        })

    }

    const addOpeningText=(e)=>{
        setNewMovie((prev)=>{
            return{
                ...prev,['openingtext']:e.target.value
            }
        })
    }


    const addReleaseDate=(e)=>{
        setNewMovie((prev)=>{
            return{
                ...prev,['releasedate']:e.target.value
            }
        })
    }

    const submitMovieDetails=(e)=>{
        e.preventDefault()
        console.log(newMovie)
    }

  
    return (
    <>
   <form onSubmit={submitMovieDetails} >
      <div className="container1">
      <div className="title">
        Add a Movie
    </div>
        <div className="row">
          <div className="col">
            <h1>Title</h1>

            <input value={newMovie.title} onChange={addtitleHandler} type="text"></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Opening Text</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input value={newMovie.openingtext}  onChange={addOpeningText} type="text"></input>

            <h1>Release Date</h1>

            <input value={newMovie.releasedate} onChange={addReleaseDate} type="date"></input>
          </div>
        </div>
        <button>Add Movie</button>
      </div>
      </form>
    </>
  );
};

export default AddNewMovie;
