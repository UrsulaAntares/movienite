// given a movienight, we will compare all the interests of the associated users thusly:
// the path we are exploring compares interests instead of movies
// a movienight has several users
// for each interst of the FIRST user in the array, (this gives this person priority, assuming they are host)
// take the sum of the interest values (start with stars) and divide by number of users in movie night
// this is different than the average level of interest of INTERESTED users but a good starting point
// ??? create a hash with key-value pairs of movie_id and average stars? ?? somehow associate the averages
// ultimately return and/or display the movie with the highest average
// stretch: indicate the different metrics like averages and/or number of interested users
// stretch: several levels of fallback to better but not best options
// stretch: give users a way to tweak or choose alternate interpretations of "best"

//the below function defaults to users' most recent movienight -- but takes in night argument
function compareInterests(night, context, placeforanswer) {
    debugger
  //context does not seem to come in consistently
  //it is intentionally not supplied everywhere BUT when I supply it on the movie_night addUser click
  //it does not show up ehre which messes up the else if
  let nightUsers = [];
  let thisNight = {};
  // debugger
  function getScoresForNight(night, context, placeforanswer) {
    let allNominations = []; //all interests of users in the group
    nightUsers.push(night.users);
    // let ownersInterests = night.users[0].interests
    // gets a starter array of the first user's interests
    // the above line limits scope of interests iterated over while giving priority to the owner;
    // ...but we are not actually using it yet and it may be irrelevant,
    // even if we give the user the option to use it this might not be the most efficient way
    night.users.forEach(
      user => (allNominations = allNominations.concat(user.interests))
    );

    // nominationHash is a hash of all nominations GROUPED by their movieId
    nominationHash = _.groupBy([...allNominations], "movie_id");

    function findScores(movieInterestSet, night) {
      let totalStars = 0;
      let totalHearts = 0;
      let numberUsersInterested = movieInterestSet.length;
      let numberUsersAttending = night.users.length;
      movieInterestSet.forEach(interest => {
        totalStars += interest.star;
        totalHearts += interest.heart;
      });
      let averageStarsInterested = totalStars / numberUsersInterested;
      let averageStarsAttending = totalStars / numberUsersAttending;
      //thse two averages are different since not ever user may ahve an interest
      let averageHeartsInterested = totalHearts / numberUsersInterested;
      let averageHeartsAttending = totalHearts / numberUsersAttending;

      // the below hash can and should have more data in it but it's at least already the structure the end needs
      return { averageStarsAttending: averageStarsAttending };
    }

    // findScores(nominationHash[319], night)
    scoresHash = {};
    for (var property1 in nominationHash) {
      scoresHash[property1] = findScores(nominationHash[property1], night);
    }
    console.log(scoresHash);

    var max = 0,
      x,
      topStarMovie_id;
    for (var x in scoresHash) {
      if (scoresHash[x]["averageStarsAttending"] > max) {
        max = scoresHash[x]["averageStarsAttending"];
        topStarMovie_id = x;
      }
    }
    console.log(
      `the most interesting movie for this group is ${topStarMovie_id}`
    );

    if (context == "topNav") {
      // this topAnswerBar might be best case for a variable defined in a more global scope (not global but close to top)
      let topAnswerBar = document.getElementById("top-answer");
      topAnswerBar.innerText = `The answer is: Movie# ${topStarMovie_id}`;
      console.log("this click came from the top nav or other default area");
    } else if (context == "uponUserAddition") {
      console.log("this click came from the add user form");
      let answerFooter = document.getElementById("answer-footer");
      answerFooter.innerText = `The answer is: Movie# ${topStarMovie_id}`;
      //the above does not seem to trigger
      //the add-user part of the form SHOULD be firing this with the context "uponUserAddition"
      //but it doesn't
      // search "uponUserAddition" on novie_night.js to see
    } else if (context == "onACard") {
      console.log("This was definitely on a card");
      
        placeforanswer.innerText = `The answer is: Movie# ${topStarMovie_id}`;
      
    } else {
      // debugger
      console.log(
        "this click came from a specific night that probably has a card"
      );
      //the following lines are broken since answerFooter IS undefined and I'm trying to find a way around it
      //...but we wouldn;t need this workaround if the passed arguments worked
      if (answerFooter != undefined) {
        let answerFooter = document.getElementById("answer-footer");
        answerFooter.innerText = `The answer is: Movie# ${topStarMovie_id}`;
      } else {
      }
      //this logic needs to be changed to be specific to the card at this part of the else statement
      //for the different cards on the myNights page
    }
  }

  if (night == undefined) {
    console.log("using default night");
    let theMovieNight = fetch(
      `${USER_URL}/${parseInt(window.localStorage.current_user_id)}`
    )
      .then(res => res.json())
      .then(user => user.nights[user.nights.length - 1])
      .then(night => {
        getScoresForNight(night, "topNav");
      });
  } else {
    getScoresForNight(night, context, placeforanswer);
    console.log("night is pre-defined");
  }
}
