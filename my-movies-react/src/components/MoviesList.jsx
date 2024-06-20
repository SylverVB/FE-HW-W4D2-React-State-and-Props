import React from "react";
import { useState } from "react";

function MoviesList({ movies = ["N/A"] }) {
  const [ourMovies, setMovies] = useState(movies);
  console.log(movies);
  // Creating an array of false values with the same length as the movies array
  const [showDetails, setShowDetails] = useState(new Array(movies.length).fill(false));
  const [showAllMovies, setShowAllMovies] = useState(true);

  function changeShowDetails() {
    // Checking if all movie details are currently visible
    const allVisible = showDetails.every((detail) => detail);
    // Setting all elements in showDetails to false if all are visible, otherwise set all to true
    setShowDetails(new Array(ourMovies.length).fill(!allVisible));
  }

  function changeMovieDetails(index) {
    const newDetails = [...showDetails];
    // Toggle the value at the specific index
    newDetails[index] = !newDetails[index];
    setShowDetails(newDetails);
  }

  function handleRemove(index) {
    let currentMovies = [...ourMovies];
    console.log(currentMovies, index);

    currentMovies.splice(index, 1);
    console.log(currentMovies);
    setMovies(currentMovies);

    // The remove functionality should work without explicitly managing showDetails.
    // However, to keep the states of the movies and their details visibility in sync, it is useful to manage showDetails when a movie is removed. 
    // If we don't update showDetails, the state might become inconsistent when a movie is removed.
    let currentDetails = [...showDetails];
    // Remove the corresponding visibility state
    currentDetails.splice(index, 1);
    setShowDetails(currentDetails);
  }

  function changeGenre() {
    setShowAllMovies(!showAllMovies)
  }

  return (
    <div id="movies">
      {/* Filtering the ourMovies array based on the showAllMovies state. If showAllMovies is true, all movies are shown. 
      If showAllMovies is false, only movies with the genre "Action" are shown. After filtering the movies, we map over 
      the filtered list to render each movie.*/}
      {ourMovies.filter((movie) => showAllMovies || movie.genre === "Action").map((movie, index) => (
        <div key={index}>
          <ul>
            <h3>{movie.title}</h3>{" "}
            <button onClick={() => changeMovieDetails(index)}>
              {showDetails[index] ? "Hide Details" : "Show Details"}
            </button>{" "}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </ul>
          {showDetails[index] && <ul>{movie.description}</ul>}
        </div>
      ))}
      <button onClick={changeShowDetails}>
        {showDetails.every((detail) => detail) ? "Hide All Movie Details" : "Show All Movie Details"}
      </button>
      <button onClick={changeGenre}>
        {showAllMovies ? "Show Action Movies" : "Back to All Movies"}
      </button>
    </div>
  );
}

export default MoviesList;


// Option 2. Without show details for a specific movie and bonus (another method)

// function MoviesList({ movies = ["N/A"] }) {
//     const [ourMovies, setMovies] = useState(movies);
//     console.log(movies);
  
//     const [showDetails, setShowDetails] = useState(false);
  
//     function changeShowDetails() {
//       setShowDetails(!showDetails);
//     }
  
//     function handleRemove(index) {
//       let currentMovies = [...ourMovies];
//       console.log(currentMovies, index);
  
//       currentMovies.splice(index, 1);
//       console.log(currentMovies);
//       setMovies(currentMovies);
//     }
  
//     return (
//       <div id="movies">
//         {ourMovies.map((movie, index) => (
//           <div key={index}>
//             <ul>
//               <h3>{movie.title}</h3>
//               <button onClick={() => handleRemove(index)}>Remove</button>
//             </ul>
//             {showDetails && <ul key={index}>{movie.description}</ul>}
//           </div>
//         ))}
//         <button onClick={changeShowDetails}>
//           {showDetails ? "Hide All Movie Details" : "Show All Movie Details"}
//         </button>
//       </div>
//     );
//   }
  
//   export default MoviesList;