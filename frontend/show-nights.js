//this will make a fetch call to nights and then filter them by ones applying to the user (option A)
//or, option B, use user.nights to get the nights 
// once there's an array of nights (that must include interests)
// forEach night render a card with a night
// and run the compare interests on that night (which is already configured to render the answer 
// in the blue footer on the card (answerFooter ) if there is one, so use a card with that footer or add one)


function renderNights(user){
    main.innerText = ''
    console.log("running renderNights")
    fetch(`http://localhost:3000/users/${user.simple_user_data.id}`)
    .then(res => res.json())
    .then(user => {
        user.nights.forEach(night => nightCard(night))
        console.log(user.nights)
    }) 
}

function nightCard(night){
    let nightCard = document.createElement("div")
    let cardFooter = document.createElement("div")
    cardFooter.classList.add('answer', 'answer-footer')
    nightCard.classList.add('uk-card', 'uk-card-default', 'uk-card-body', 'uk-width-1-2@m', 'urs-card')
    nightCard.innerText = night.name
    nightCard.append(cardFooter)
    main.prepend(nightCard)
    compareInterests(night, "onACard", cardFooter)
    //same not-passing-arguments problem on both onACard (the context) and the cardFooter ()location
}