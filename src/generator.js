Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
};

window.onload = function() {
    changeFooterText();
};

console.log("It's alive!")


function changeFooterText() {
    const textlist = ["Made for fun by Odyssey346", "Made with love by Odyssey346", "Made to mess around with JS by Odyssey346"];
    document.getElementById('footertext').innerHTML = textlist.random()
};