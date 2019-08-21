
// This will be a show page for the current_user's information
function renderMovies(user){
    let context; 
    let current_user_id = window.localStorage.getItem('current_user_id')
    main.innerHTML =  " " 

    fetch(`http://localhost:3000/users/${current_user_id}`)
        .then(r => r.json())
        .then(user => {
            console.log("Fetch is finished")
            user.movies.forEach(movie => {

                showMovie(movie, user, context)
            })
        })
}

