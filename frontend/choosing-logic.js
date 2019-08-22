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
function compareInterests(night, context, placeForAnswer) {
    let nightUsers = [];

    if (night == undefined) {
        let theMovieNight = fetch(
          `${USER_URL}/${parseInt(window.localStorage.current_user_id)}`
        )
          .then(res => res.json())
          .then(user => user.nights[user.nights.length - 1])
          .then(night => {
            getScoresForNight(night, "topNav");
            // the above line should take in a placeForAnswer for better flexibility -- later
            // TBH everything above the else should be irrelevant now that Urs took out the navbar version;
            // ALL calls to the function should have a night passed as argument, defined, now
          });
      } else {
        getScoresForNight(night, context, placeForAnswer);
      }
  
  
  function getScoresForNight(night, context, placeForAnswer) {
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



    // findScores(nominationHash[319], night)
    scoresHash = {};
    for (var property1 in nominationHash) {
      scoresHash[property1] = findScores(nominationHash[property1], night);
    }

    console.log(scoresHash);

    var maxStars = 0,
      x,
      topStarMovie_id;
    for (var x in scoresHash) {
      if (scoresHash[x]["averageStarsAttending"] > maxStars) {
        maxStars = scoresHash[x]["averageStarsAttending"];
        topStarMovie_id = x;
      }
    }

    // let answer = `the most interesting movie for this group is ${topStarMovie_id} with a score of ${maxStars}`
   
    // outputAnswer(answer, context, placeForAnswer)
    
    function superAnswer(movie_id, placeForAnswer){
        fetch(`http://localhost:3000/movies/${movie_id}`)
            .then(res => res.json())
            .then(movie => {
                let movieInfoAnswer = `
                <h5 class="answer-header">You should watch:</h5>
                <img class="movie-pic thumbnail" src="${movie.image_url}">
                <h4 style="display:inline">${movie.title}</h4>
                `
                // debugger
                outputAnswer(movieInfoAnswer, placeForAnswer)
            })
        // function putItAllTogether(movieInfoAnswer){
        //     debugger
        //     outputAnswer(movieInfoAnswer)
        // }    
        console.log("we are running superAnswer")
    }

    superAnswer(topStarMovie_id, placeForAnswer)

    function outputAnswer(answer, placeForAnswer) {
        if (context == "topNav") {
            // this topAnswerBar might be best case for a variable defined in a more global scope (not global but close to top)
            let topAnswerBar = document.getElementById("top-answer");
            topAnswerBar.innerHTML = answer;
            // this option has been removed from the navbar so this can go away
        } else if (context == "uponUserAddition") {
        
            let answerFooter = document.getElementById("answer-footer");
            answerFooter.innerHTML = answer;
        } else if (context == "onACard") {
            let scoresDataDiv = document.createElement("div")
            scoresDataDiv.innerHTML = `<table class="scores-data">
            
            <theader>
                <td>Movie ID</td> 
                <td>Average Stars</td>
                <td>Average Hearts</td>
                <td>Star Strength</td>
                <td>Heart Strength</td>
                <td>Interested Guests</td>
            </theader>


            <tr>
                <td>${topStarMovie_id}</td> 
                <td>${scoresHash[parseInt(topStarMovie_id)]['averageStarsAttending']} </td>
                <td>${scoresHash[parseInt(topStarMovie_id)]['averageHeartsAttending']} </td>
                <td>${scoresHash[parseInt(topStarMovie_id)]['averageStarsInterested']} </td>
                <td>${scoresHash[parseInt(topStarMovie_id)]['averageHeartsInterested']} </td>
                <td>${scoresHash[parseInt(topStarMovie_id)]['numberUsersInterested']}/${scoresHash[parseInt(topStarMovie_id)]['numberUsersAttending']} </td>
            </tr>
                </table>
                `
            placeForAnswer.innerHTML = answer;
            placeForAnswer.append(scoresDataDiv)
        } 
    }
    
  }

}



function findScores(movieInterestSet, night) {
    let totalStars = 0;
    let totalHearts = 0;
    let numberUsersInterested = movieInterestSet.length;
    let numberUsersAttending = night.users.length;
    movieInterestSet.forEach(interest => {
      totalStars += interest.star;
      totalHearts += interest.heart;
    });
    let averageStarsInterested = Math.ceil(totalStars / numberUsersInterested);
    let averageStarsAttending = Math.ceil(totalStars / numberUsersAttending);
    //thse two averages are different since not ever user may ahve an interest
    let averageHeartsInterested = Math.ceil(totalHearts / numberUsersInterested);
    let averageHeartsAttending = Math.ceil(totalHearts / numberUsersAttending);

    // the below hash can and should have more data in it but it's at least already the structure the end needs
    return { averageStarsAttending: averageStarsAttending, 
            totalStars: totalStars, 
            totalHearts: totalHearts, 
            numberUsersInterested: numberUsersInterested,
            numberUsersAttending: numberUsersAttending,
            averageStarsInterested: averageStarsInterested,
            averageHeartsAttending: averageHeartsAttending,
            averageHeartsInterested: averageHeartsInterested,
        };
  }