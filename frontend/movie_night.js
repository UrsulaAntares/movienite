function movieNight(e, user, movieContainer){
    main.innerHTML = " "
    main.innerHTML = `
    <div class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade uk-background-secondary" uk-height-viewport>
    
    <div class="uk-card uk-card-default uk-card-large uk-card-default uk-width-1-2@m uk-position-center">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="images/little-film.png">
            </div>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">${user.simple_user_data.name}'s Movie Night</h3>
                <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
    
    <form class="uk-search uk-search-default" id="add_user">
        <input class="uk-search-input" type="search" placeholder="Add Friend...">
        <input type="submit">
    </form>
    
    </div>
        <p id="users_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="uk-card-footer uk-card-primary">
        <a href="#" class="uk-button uk-button-text">Click here to see your Movie!</a>
    </div>
</div>
</div>`
let context = "frontPage-rating"

let users_list = document.getElementById('users_list')

let userForm = document.getElementById('add_user')
    userForm.addEventListener('submit', (e) => addUser(e, user, users_list))




}

function addUser(e, user, users_list){
    let creator_id = window.localStorage.getItem('current_user_id')
    let added_user_username = window.localStorage.getItem('current_user_id')
    



    debugger
}