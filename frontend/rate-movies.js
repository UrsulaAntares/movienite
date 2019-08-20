
function getMoviesToRate(user) {
    // e.preventDefault()
    console.log("successfully got to next page")
    main.innerHTML = ""
    movieContainer = document.createElement("div")

    let current_user = user
    // myMoviesLink.addEventListener('click', (e) => renderMovies(e, user, movieContainer))
    // createMovieNightLink.addEventListener('click', (e) => movieNight(e, user, movieContainer))

    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then((allMovies) => findUnratedMovies(current_user, allMovies, movieContainer))
    main.append(movieContainer)
    console.log("Hey, we ran the thing")
}

function showMovie(movie, user, context) {
    // main.innerHTML = ''

    const aMovie = document.createElement("div")
    const movieTitle = document.createElement("h1")
    const moviePic = document.createElement("img")
    moviePic.src= movie.image_url
    moviePic.classList.add('movie-pic', 'thumbnail')
    movieTitle.innerText =  movie.title 
    movieTitle.classList.add('uk-card-title')
    aMovie.append(moviePic, movieTitle)
    aMovie.classList.add('uk-card', 'uk-card-default', 'uk-card-body', 'uk-width-1-2@m')
    
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
    if (context != "frontPage-rating") {
        if (user.movies.includes(movie)){ console.log("Yes, this is one of our movies")}
        let interest = movie.interests.filter(el => el.user_id == 1)[0]
        hearts.value = interest.heart
        stars.value =interest.star
    }
   
    submitButton.type = "submit"
    submitButton.addEventListener("click", event => createInterest(movie, user, stars.value, hearts.value, context))
    //after running the createInterest, should replace movie in the movie container with a new movie, unrated

    movieRatingForm.append(stars, hearts, submitButton)
    movieRatingsContainer.append(movieRatingForm)
    aMovie.append(movieRatingsContainer)
    // container.append(aMovie)
    main.append(aMovie)
} 

function createInterest(movie, user, stars, hearts, context) {
    event.preventDefault()

    data = {movie_id: movie.id, user_id: parseInt(window.localStorage.current_user_id), 
        star: stars, heart: hearts}
    fetch("http://localhost:3000/interests", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => console.log(res))
    if (context == "frontPage-rating") {getMoviesToRate(user)}
    console.log("you tried to rate a movie")
    
}
//this used to be named compareMovies but that got confusing when we built comparison logic
function findUnratedMovies(user, allMovies){
    let currentUserId = parseInt(window.localStorage.getItem('current_user_id'))
    let context = "frontPage-rating"
        
        fetch('http://localhost:3000/filter', {
            method: "POST", 
            headers: {'Content-Type':'application/json', 'Accept':'application/json'},
            body: JSON.stringify({user: user})
        })
        .then(r => r.json())
        .then(unratedMovies => {
            showMovie(unratedMovies[0], user,  context)
        })
    
}
