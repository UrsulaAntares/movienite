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
    <form>
        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        <label><input class="uk-checkbox" type="checkbox" checked> A</label>
        <label><input class="uk-checkbox" type="checkbox"> B</label>
        <label<=><input type="submit"></label>
    </form>
    </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div class="uk-card-footer uk-card-primary">
        <a href="#" class="uk-button uk-button-text">Click here to see your Movie!</a>
    </div>
</div>
</div>`
let context = "frontPage-rating"


}