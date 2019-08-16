USER_URL = `http://localhost:3000/users`
LOGIN_URL = `http://localhost:3000/login`
const main = document.getElementById('main')
document.addEventListener('DOMContentLoaded', function(e){
    renderLoginPage(main)
    tweakLoginPage()
    let form = document.getElementsByTagName('form')[0]
    form.addEventListener('submit', (e) => validateUser(e, form, main))
	
	
	
	
	
})

function renderLoginPage(main){

    main.innerHTML = `<div class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
	<div class="uk-width-1-1">
		<div class="uk-container">
			<div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
				<div class="uk-width-1-1@m">
					<div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
						<h3 class="uk-card-title uk-text-center">Welcome back!</h3>
						<form>
							<div class="uk-margin">
								<div class="uk-inline uk-width-1-1">
									<span class="uk-form-icon" uk-icon="icon: mail"></span>
									<input class="uk-input uk-form-large" type="text">
								</div>
							</div>
							<div class="uk-margin">
								<div class="uk-inline uk-width-1-1">
									<span class="uk-form-icon" uk-icon="icon: lock"></span>
									<input class="uk-input uk-form-large" type="password">	
								</div>
							</div>
							<div class="uk-margin">
								<button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button>
							</div>
							<div class="uk-text-small uk-text-center">
								Not registered? <a href="#">Create an account</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`

    
    
}

function tweakLoginPage(){
    let loginTitle = document.getElementsByClassName("uk-card-title uk-text-center")[0]
        loginTitle.innerText = "Welcome to Movie Night! <LOGO HERE>"

    let inputPassword = document.getElementsByClassName('uk-input uk-form-large')[1]
        inputPassword.disabled = true
        inputPassword.placeholder = "No Password Required"
    
    let usernameInputIcon = document.getElementsByTagName('span')[0]
        
    
}

// This is going to be a post request to a sessions controller that creates a user session
function validateUser(e, form, main){
    let username = form[0].value
	e.preventDefault()
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {'Content-Type':'application/json', 'Accept':'application/json'}, 
        body: JSON.stringify(username)
    }).then(r => r.json()).then(user => {getMoviesToRate(main, user)})



}
