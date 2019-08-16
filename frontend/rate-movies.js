// document.addEventListener("DOMContentLoaded", event => {
//     console.log("accessed rate movies")
//     const main = document.getElementById("main")
//     getMoviesToRate(main)
// })

function getMoviesToRate(main) {
    console.log("successfully got to next page")
    main.innerHTML = ""
    movieContainer = document.createElement("div")
    
    fetch("http://localhost:3000/movies", {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(movieArray => movieArray.forEach(movie => showMovie(movie, moviecontainer) )) 
    showMovie(movieContainer)
    // we may want to change this to show one at a time
    main.append(movieContainer)
    // Movie.all
    console.log("Hey, we ran the thing")
}

function showMovie(movie, movieRatingDiv) {
    const aMovie = document.createElement("div")
    const movieTitle = document.createElement("h1")
    const movieRatingsContainer = document.createElement("div")
    const movieRatingForm = document.createElement("form")
    movieTitle.innerText =  movie.title 
    //the next few lines are temporary dummy text while we try to get the CORS to let us FETCH
    // movieTitle.innerText = "Movie Title"

    //end dummy text
    aMovie.append(movieTitle)
    movieContainer.append(aMovie)
} 