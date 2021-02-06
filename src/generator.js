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


function Checkbox1Clicked() {
    if (document.querySelector('#appendTheCheckbox:checked') !== null) {
        window.Checkbox1Checked = true;
        console.log("checkbox is ticked.")
    }
    else {
        window.Checkbox1Checked = false;
        console.log("checkbox isn't ticked.")
    }
}

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
    const gamingNoun = []
    if (document.querySelector('#appendTheCheckbox:checked') !== null) {
        window.Checkbox1Checked = true;
        console.log("checkbox is ticked.")
    }
    else {
        window.Checkbox1Checked = false;
        console.log("checkbox isn't ticked.")
    }
    console.log("Making a username!")
    console.log("Current adjective info:", window.adjectiveValue)
    switch(window.adjectiveValue) {
        case "ego_adjective":
            if (window.Checkbox1Checked = true) {
                var adjective = "The" + egoBoosterAdjectives.random();
                console.log(adjective)
            }
            if (window.Checkbox1Checked = false) {
                var adjective = egoBoosterAdjectives.random();
                console.log(adjective)
            }
            break;
        case "gaming_adjective":
            if (window.Checkbox1Checked = true) {
                var adjective = "The" + gamingAdjectives.random();
                console.log(adjective)
            }
            if (window.Checkbox1Checked = false) {
                var adjective = gamingAdjectives.random();
                console.log(adjective)
            }
            break;
        case "selfsarcasm_adjective":
            if (window.Checkbox1Checked = true) {
                var adjective = "The" + selfSarcasticAdjectives.random();
                console.log(adjective)
            }
            if (window.Checkbox1Checked = false) {
                var adjective = selfSarcasticAdjectives.random();
                console.log(adjective)
            }
            break;
        default:
            var adjective = gamingAdjectives.random();
            console.log(adjective)
    } 
}