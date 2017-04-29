(function() {
    var fab, playlist, currentPlaying, main, fabIcon;

    function onFABClick() {
        main.classList.toggle("playing");
        if (main.classList.contains("playing")) {
            fabIcon.innerHTML = '<path fill="#fff" d="M14,19H18V5H14M6,19H10V5H6V19Z" />';
        } else {
            fabIcon.innerHTML =  '<path fill="#fff" d="M8,5.14V19.14L19,12.14L8,5.14Z" />';
        }
    }

    function init() {
        fab = document.querySelector("div.fab");
		fabIcon = fab.querySelector("svg");
        playlist = document.querySelector("div.playlist");
        main = document.querySelector("main");

        fab.addEventListener("click", onFABClick);
    }


    window.addEventListener("DOMContentLoaded", init);
})()
