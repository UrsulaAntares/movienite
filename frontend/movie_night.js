function movieNight(e, user, movieContainer){
    main.innerHTML = " "
    main.innerHTML = `
    <div class="uk-section  uk-flex uk-flex-middle uk-animation-fade " uk-height-viewport>
    
    <div class="uk-card uk-card-default uk-card-large uk-card-default uk-width-1-2@m uk-position-center">
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-border-circle" width="40" height="40" src="images/little-film.png">
            </div>
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">Create Movie Night</h3>
                <p class="uk-text-meta uk-margin-remove-top date"></p>
            </div>
        </div>
    </div>
    <div class="uk-card-body">
        <h4 id="subtitle">Tell us about your special night! </h4>
        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        
        <form class="uk-search uk-search-default" id="add_user">
            <input class="uk-search-input" type="search" placeholder="Name your movie night...">
            <input id="users" class="uk-search-input" type="datetime-local">
            <input type="submit">
        </form>
        
        
        </div>
        <div id="notifications"></div>
        <div id="users_list"></div>
    </div>
    <div id="answer-footer" class="uk-card-footer uk-card-primary">
        
    </div>
</div>
</div>`
let context = "frontPage-rating"
let notifications = document.getElementById('notifications')
let users_list = document.getElementById('users_list')
let inputField = document.getElementById('users')

let userForm = document.getElementById('add_user')
    userForm.addEventListener('submit', (e) => createMovieNight(e, user, users_list))
}

function createMovieNight(e, user, users_list){
    e.preventDefault()
    let nightName = e.target[0].value.trim()
    let datetime = e.target[1].value
    obj = {night: nightName, user: user, datetime: datetime }
    fetch("http://localhost:3000/nights", {
        method: "POST",
        headers: {'Content-Type':'application/json', 'Accept':'application/json'},
        body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .then((data) => editPage(data, user, datetime))
    
}

function editPage(data, user, time){
    let oldForm = document.getElementById('add_user')
    let newForm = document.createElement('form')    
    let availableUsers = []
    let newDateLine = document.querySelector(".date")
    
    var dateParts = data.night.date.split('T')[0].split('-')
    var time = data.night.date.split('T')[1] 
    newDateLine.innerText = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]} | ${time.slice(0,5)}`
            


    fetch(USER_URL).then(res => res.json() ).then(res => {res.forEach(user => {availableUsers.push(user.username)})
    // console.log(availableUsers[1])
    newForm.innerHTML = `
    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" id="select-users" list="available-users-list" />
            <datalist id="available-users-list"></datalist>
        </div>
            <input type="submit">
    </div>`

    let list = document.getElementById('available-users-list');
    
    availableUsers.forEach(function(item){
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
        });
    })
        

        
        oldForm.parentNode.replaceChild(newForm, oldForm);
        users_list.innerText = `Who's invited: ${user.simple_user_data.name}`
        newForm.addEventListener('submit', (e) => {
            e.preventDefault()
            let newFriend = e.target[0].value.trim()
            //reconfigure form to use named input fields for 
            
            fetch("http://localhost:3000/add", {
                method: "POST",
                headers: {'Content-Type':'application/json', 'Accept':'application/json'},
                body: JSON.stringify({newFriend: newFriend, data: data})
            })
            .then(r => r.json()).then((data) => {
                let users_list = document.getElementById('users_list')
              
                    users_list.innerText +=  `, ${data.added_user.name}`
                    notifications.innerHTML += `<div class="uk-alert-primary" uk-alert>
                    <a class="uk-alert-close" uk-close></a>
                    <p>Congratulations! ${data.added_user.name} has been successfully added to your movie night!</p>
                    </div>`

                    // debugger
                    // begin fetch to night to call the logic function
                    fetch(`http://localhost:3000/nights/${data.night_id}`)
                    .then(res => res.json())
                    .then(night => {
                        compareInterests(night,"uponUserAddition")}
                        )
                        //the above is SUPPOSED to send the context "uponUserAddition" to the function
                        //BUT IT DOES NOOOOOOTTTTT AND I DON'T KNOW WHYYYYYY
                        //If it DID it would trigger the else if condition (context == "uponUserAddition")
                        //which would add the magic answer to the blue footer each time it needs to be refreshed
                        //Since it does NOT I am afraid to move on to other logic 
                        //note: it also takes in optional third arguement of place to put the answer as an effort to obviate this problem
                    //end fetch to night show to call logic function
        
            })
        })

        let cardTitle = document.getElementsByTagName('h3')[0]
            cardTitle.innerText = `${data.night.name}`

        let newTitle = document.getElementById('subtitle')
            newTitle.innerText = "Add some friends to join the party!"

        
        
}

