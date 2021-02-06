/* If you plan on using this code, or a part of it, you need to give credit. */

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
};

console.log("It's alive!")

function siteLoad() {
    changeFooterText();
}; 

function changeFooterText() {
    const textlist = ["Made for fun by Odyssey346", "Made with love by Odyssey346", "Made to mess around with JS by Odyssey346"];
    document.getElementById('footertext').innerHTML = textlist.random()
};


function CheckAdjectiveValue() {
    window.adjectiveValue = document.getElementById("adjective").value;
    console.log(window.adjectiveValue);
}

function CheckNounValue() {
    window.nounValue = document.getElementById("noun").value;
    console.log(nounValue);
}

function generateUsername() {
    const gamingAdjectives = ["Fragger", "Gamer", "Gaming", "Pro"]
    const egoBoosterAdjectives = ["Best", "Coolest", "Nicest", "Cutest", "Smartest"]
    const selfSarcasticAdjectives = ["Worst", "Dumbest", "Ugliest"]
    const gamingNouns = ["Gamer", "Player", "Pro", "Killer"]
    console.log("Making a username!")
    console.log(document.querySelector('#appendTheCheckbox:checked'))
    console.log(window.adjectiveValue)
    switch(window.adjectiveValue) {
        case "ego_adjective":
            if (document.querySelector('#appendTheCheckbox:checked') !== null) {
                var adjective = "The" + egoBoosterAdjectives.random();
                console.log(adjective)
            }
            if (document.querySelector('#appendTheCheckbox:checked') == null) {
                var adjective = egoBoosterAdjectives.random();
                console.log(adjective)
            }
        case "gaming_adjective":
            if (document.querySelector('#appendTheCheckbox:checked') !== null) {
                var adjective = "The" + gamingAdjectives.random();
                console.log(adjective)
            }
            if (document.querySelector('#appendTheCheckbox:checked') == null) {
                var adjective = gamingAdjectives.random();
                console.log(adjective)
            }
        case "selfsarcasm_adjective":
            if (document.querySelector('#appendTheCheckbox:checked') !== null) {
                var adjective = "The" + selfSarcasticAdjectives.random();
                console.log(adjective)
            }
            if (document.querySelector('#appendTheCheckbox:checked') == null) {
                var adjective = selfSarcasticAdjectives.random();
                console.log(adjective)
            }
        default:
            var adjective = gamingAdjectives.random();
    }
}