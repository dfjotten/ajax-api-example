// const axios = require('axios')

async function fetchJoke() {
    try{
        const getJoke = await axios.get("https://api.chucknorris.io/jokes/random");
        console.log(getJoke.data.value)

        // container.textContent = getJoke.data.value

        const joke = document.createElement('p');
        joke.textContent = getJoke.data.value;
        container.appendChild(joke)
        return getJoke.data.value;

    } catch (error){
        console.log(error)
    }
}
const container = document.getElementById('joke')

fetchJoke()