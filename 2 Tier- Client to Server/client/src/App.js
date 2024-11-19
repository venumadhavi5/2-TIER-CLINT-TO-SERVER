import {useState} from "react";
import './App.css';

function App() {
  let [shows, setShows] =useState([]);

  let getCartoonShowsFromServer = async ()=>{
    let reqOptions = {
      method:"GET"
    }
    let JSONData = await fetch("http://localhost:23593/cartoonShows",reqOptions);
    let JSOData = await JSONData.json();

    setShows(JSOData);
    console.log(JSOData);
  }

  let getMovieNamesFromServer = async ()=>{
    let reqOptions = {
      metho: "GET"
    }
    let JSONData = await fetch("http://localhost:23593/movieNames", reqOptions);
    let JSOData = await JSONData.json();
    setShows(JSOData);
    console.log(JSOData);
  }
  return (
    <div className="App">
      <button onClick={()=>{
        getCartoonShowsFromServer();
      }}>Get CartoonShows</button>

      <button onClick={()=>{
        getMovieNamesFromServer();
      }}>Get MovieNames</button>
      {
        shows.map((ele,i)=>{
         return<h1>{ele}</h1>
        })}

    </div>
  );
}

export default App;
