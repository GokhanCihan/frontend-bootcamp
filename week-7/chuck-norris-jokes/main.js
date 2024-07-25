const joke = document.getElementById("joke");
const nextButton = document.getElementById("next-joke");
function getNextJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {return response.json();})
        .then((data) => {
        joke.innerText = `${data.value}`;
    })
}
document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter'){
        getNextJoke();
    }
})
nextButton.addEventListener("click", getNextJoke);