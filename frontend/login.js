document.addEventListener("DOMContentLoaded", function(e) {
  renderLoginPage(main);
  tweakLoginPage();
  let form = document.getElementsByTagName("form")[1]; // change back to 1
  form.addEventListener("submit", e => validateUser(e, form, main));
  // debugger
  // myMoviesLink.addEventListener('click', (e) => renderMovies(e, user, movieContainer))
  // createMovieNightLink.addEventListener('click', (e) => movieNight(e, user, movieContainer))
});

function renderLoginPage(main) {
  main.innerHTML = `<div class="uk-section  uk-flex uk-flex-middle uk-animation-fade " uk-height-viewport>
	<div class="uk-width-1-1">
		<div class="uk-container">
			<div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
				<div class="uk-width-1-1@m">
					<div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large" style="background:black;     top: -80px;">
						<h3 class="uk-card-title uk-text-center" style="color:white; margin: 0 0px -39px 0;"  >Welcome back!</h3>
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
</div>`;
}

<<<<<<< HEAD
function tweakLoginPage() {
  let loginTitle = document.getElementsByClassName(
    "uk-card-title uk-text-center"
  )[0];
  loginTitle.innerText = "Welcome to Movie Night! <LOGO HERE>";
=======
function tweakLoginPage(){
    let loginTitle = document.getElementsByClassName("uk-card-title uk-text-center")[0]
        loginTitle.innerHTML = `Welcome to Movie Night! <br><img src="images/couch-logo.jpg">`
>>>>>>> couchstylin

  //////////////////////////

  let inputPassword = document.getElementsByClassName(
    "uk-input uk-form-large"
  )[1];
  inputPassword.disabled = true;
  inputPassword.placeholder = "No Password Required";

  let usernameInputIcon = document.getElementsByTagName("span")[0];
  // let nav = document.getElementsByTagName('header')[0]
  // nav.innerHTML = ''
}

// This is going to be a post request to a sessions controller that creates a user session
function validateUser(e, form, main) {
  let username = form[0].value;
  e.preventDefault();

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(username)
  })
    .then(r => r.json())
    .then(user => {
      console.log("adding event listener to myMoviesLink");
      goRateLink.addEventListener("click", e => getMoviesToRate(user));
      myMoviesLink.addEventListener("click", () => renderMovies(user));
      createMovieNightLink.addEventListener("click", e => movieNight(e, user));
      //logicLink.addEventListener('click', (e) => compareInterests(undefined,"topNav"))
      myNightsLink.addEventListener("click", () => renderNights(user));
      //the above listener can/may take in an argument of movienight or default to
      // a users's last movienight; currently leaving this off since this function will
      // change as we make the choosing options more complicated and call this function
      // on different events

      window.localStorage.setItem("current_user_id", user.simple_user_data.id);
      window.localStorage.setItem(
        "current_username",
        user.simple_user_data.username
      );
      getMoviesToRate(user);
    });
}
