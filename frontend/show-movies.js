
// This will be a show page for the current_user's information
function renderMovies(e, current_user, container){
    let current_user_id = window.localStorage.getItem('current_user_id')
    
    fetch(`http://localhost:3000/users/${current_user_id}`)
        .then(r => r.json())
        .then((user) => { renderUserMovies(user, current_user, container)
        })

}

function renderUserMovies(user, moreUser, container){
    main.innerHTML = " "    
    let holder = document.createElement('container')
        holder.classList.add('.uk-container-large')

    moreUser.movies.forEach((movie) => {
        let movieCard = document.createElement('div')
            movieCard.className = ('uk-card uk-card-default uk-card-body uk-width-1-2@m')
            movieCard.innerHTML = `<h3 class="uk-card-title">${movie.title}</h3>
            <p>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`

        holder.appendChild(movieCard)
    })
        
    main.appendChild(holder)
}