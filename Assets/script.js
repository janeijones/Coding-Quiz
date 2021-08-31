highscoreEl = document.querySelector('.btn')

highscoreEl.addEventListener("click", function(e) {
    e.preventDefault();
    containerEl = document.querySelector('#container')
    const highScore = localStorage.getItem("highScore")
    containerEl.textContent = "High Score: " + highScore

})