import React from "react";
import './AddNewMovie.css';
import {useState} from "react"
const AddNewMovie = () => {
    const [newMovie,setNewMovie]=useState({title:'',openingText:'',releaseDate:'',id:null})
    
    
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
                ...prev,['openingText']:e.target.value
            }
        })
    }


    const addReleaseDate=(e)=>{
        setNewMovie((prev)=>{
            return{
                ...prev,['releaseDate']:e.target.value
            }
        })

        setNewMovie((prev)=>{
            return{
                ...prev,['id']:Math.random()
            }
        })
        
    }

    async function submitMovieDetails(e){
        e.preventDefault()
       
        
        const response=await fetch('https://movies-ae6a0-default-rtdb.firebaseio.com/movies.json',{
            method:'POST',
            body:JSON.stringify(newMovie),
            headers:{
                'Content-Type':'application/json'
            }
        })
        setNewMovie({title:'',openingText:'',releaseDate:'',id:null})
        const data=await response.json()
        console.log(data)

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
            <input value={newMovie.openingText}  onChange={addOpeningText} type="text"></input>

            <h1>Release Date</h1>

            <input value={newMovie.releaseDate} onChange={addReleaseDate} type="date"></input>
          </div>
        </div >
        <div className="button">
        <button>Add Movie</button>
        </div>
      </div>
      </form>
    </>
  );
};

export default AddNewMovie;
