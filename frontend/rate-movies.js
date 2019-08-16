
function getMoviesToRate(main, user) {
    console.log("successfully got to next page")
    main.innerHTML = ""
    movieContainer = document.createElement("div")


    myMoviesLink.addEventListener('click', (e) => renderMovies(e, user, movieContainer))
    createMovieNightLink.addEventListener('click', (e) => movieNight(e, user))

    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(allMovies => allMovies.select(movie => movie.interests.forEach(user_id != user.simple_user_data.id) ) )
    //Ursula is having hard time on line 14 selecting by movies that have interests with user -- two levels
    .then(unratedMovies =>  showMovie(unratedMovies[0], user, movieContainer) ) 
    //this needs logic to know what movies the user has NOT rated 
    main.append(movieContainer)
    // Movie.all
    console.log("Hey, we ran the thing")
}

function showMovie(movie, user, movieRatingDiv) {
    const aMovie = document.createElement("div")
    const movieTitle = document.createElement("h1")
    const moviePic = document.createElement("img")
    moviePic.src= movie.image_url
    movieTitle.innerText =  movie.title 
    aMovie.append(movieTitle)
    
    const movieRatingsContainer = document.createElement("div")
    const movieRatingForm = document.createElement("form")
    movieRatingForm.id = "rating-form"
    const stars = document.createElement("input")
    const hearts = document.createElement("input")
    const submitButton = document.createElement("input")

    stars.type = "range"
    hearts.type = "range"
    stars.name = "stars"
    hearts.name = "hearts"
    stars.value = "50"
    hearts.value = "50"
    submitButton.type = "submit"
    submitButton.addEventListener("click", event => createInterest(movie, user, stars.value, hearts.value, movieContainer))
    //after running the createInterest, should replace movie in the movie container with a new movie, unrated

    movieRatingForm.append(stars, hearts, submitButton)
    movieRatingsContainer.append(movieRatingForm)
    movieContainer.append(aMovie, movieRatingsContainer)
} 

function createInterest(movie, user, stars, hearts) {
    event.preventDefault()
    // stars = document.getElementById("rating-form").stars.value
    // hearts = document.getElementById("rating-form").hearts.value

    data = {movie_id: movie.id, user_id: user.simple_user_data.id, 
        star: stars, heart: hearts}
    fetch("http://localhost:3000/interests", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => console.log(res))
    console.log("you tried to rate a movie")

}