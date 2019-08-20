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
                <h3 class="uk-card-title uk-margin-remove-bottom">Create Movie Night</h3>
                <p class="uk-text-meta uk-margin-remove-top">Will take place on: <time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        
        <form class="uk-search uk-search-default" id="add_user">
            <input class="uk-search-input" type="search" placeholder="Name your movie night...">
            <input id="users" class="uk-search-input" type="datetime-local">
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
let inputField = document.getElementById('users')

let userForm = document.getElementById('add_user')
    userForm.addEventListener('submit', (e) => createMovieNight(e, user, users_list))




}

function createMovieNight(e, user, users_list){
    e.preventDefault()
    let nightName = e.target[0].value.trim()
    let time = e.target[1].value
    obj = {night: nightName, user: user}
    fetch("http://localhost:3000/nights", {
        method: "POST",
        headers: {'Content-Type':'application/json', 'Accept':'application/json'},
        body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .then((data) => editPage(data, user, time))
    
    



}

function editPage(data, user, time){
    let oldForm = document.getElementById('add_user')
    let newForm = document.createElement('form')    
        newForm.innerHTML = `
        <div class="uk-margin">
            <div class="uk-inline">
                <span class="uk-form-icon" uk-icon="icon: user"></span>
                <input class="uk-input" type="text" placeholder="Add a User...">
            </div>
                <input type="submit">
        </div>`
        oldForm.parentNode.replaceChild(newForm, oldForm);

        newForm.addEventListener('submit', (e) => {
            e.preventDefault()
            let newFriend = e.target[0].value.trim()

            fetch("http://localhost:3000/add", {
                method: "POST",
                headers: {'Content-Type':'application/json', 'Accept':'application/json'},
                body: JSON.stringify({newFriend: newFriend, data: data})
            })
            .then(r => r.json()).then((data) => {
                let users_list = document.getElementById('users_list')
                // debugger
                    users_list.innerHTML = `<div class="uk-alert-primary" uk-alert>
                    <a class="uk-alert-close" uk-close></a>
                    <p>Congratulations! ${data.added_user.name} has been successfully added to your movie night!</p>
                    </div>`
                
            })
        })

        let cardTitle = document.getElementsByTagName('h3')[0]
            cardTitle.innerText = `${data.night.name}`

        
        


        // debugger
}

`<div class="uk-alert-primary" uk-alert>
<a class="uk-alert-close" uk-close></a>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
</div>`