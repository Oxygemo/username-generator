/* If you plan on using this code, or a part of it, you need to give credit. */

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
};

console.log("It's alive!")

function changeFooterText() {
    const textlist = ["Made for fun by Odyssey346", "Made with love by Odyssey346", "Made to mess around with JS by Odyssey346"];
    document.getElementById('footertext').innerHTML = textlist.random()
};