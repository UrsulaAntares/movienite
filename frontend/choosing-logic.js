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

// function compareInterests(e, user, night = user.movie_nights[user.movie_nights.length -1]){
//    //the above logic takes in an OPTIONAL argument of "night" OR defaults to a user's MOST RECENT movienight
//     console.log(night)
//     debugger
// }


//the below function defaults to users' most recent movienight -- 
function compareInterests(e, night){
    e.preventDefault()
    let nightUsers = []
    let thisNight = {}
    if (night == undefined){ console.log("night is undefined")
        let theMovieNight = fetch(`${USER_URL}/${parseInt(window.localStorage.current_user_id)}`)
        .then(res => res.json())
        .then(user => (user.nights[user.nights.length -1]))
        .then(night => {
            // thisNight = night;
            let allNominations = [] //all interests of users in the group
            nightUsers.push(night.users)
            let ownersInterests = night.users[0].interests //gets a starter array of the first user's interests
            //the above line limits scope of interests iterated over;  
            night.users.forEach(user => allNominations = allNominations.concat(user.interests))

            
  
            // nominationHash is a hash of all nominations GROUPED by their movieId
            nominationHash = _.groupBy([...allNominations], 'movie_id' );

            //have to go through the hash by calling each movie_id as a key
            // then, for example, movie number 319: 
            // nominationHash[319].forEach(interest => console.log(interest.heart))
            // we STILL NEED TO make this go through the hash for each move night; the below is just run on one movie
            
            function findAverages(movieInterestSet, night){
                let totalStars = 0
                let totalHearts = 0
                let numberUsersInterested = movieInterestSet.length
                let numberUsersAttending = night.users.length
                movieInterestSet.forEach(interest => {
                    totalStars += interest.star
                    totalHearts += interest.heart
                }) 
                let averageStarsInterested = totalStars/numberUsersInterested
                let averageStarsAttending = totalStars/numberUsersInterested 
                //thse two averages are different since not ever user may ahve an interest
                let averageHeartsInterested = totalHearts/numberUsersInterested
                let averageHeartsAttending = totalHearts/numberUsersAttending
                debugger
            }
            
            findAverages(nominationHash[319], night)

            debugger
        })
       
        
}
    else{console.log("night is defined")}
    // debugger
    return thisNight
}