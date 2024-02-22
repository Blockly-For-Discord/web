

function SetNavbar (html) {
    var nav = document.getElementById('navbar');

    if (nav !== null) {
        nav.innerHTML = html;
    } else {
        console.log("[B4D] Navbar does not exist")
    }
}
