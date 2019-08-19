
// This will be a show page for the current_user's information
function renderMovies(e, container){
    main.innerHTML = " "    
let holder = document.createElement('container')
    holder.classList.add('.uk-container-large')
    holder.innerHTML = `<div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
    <h3 class="uk-card-title">Default</h3>
    <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
`
main.appendChild(holder)

}