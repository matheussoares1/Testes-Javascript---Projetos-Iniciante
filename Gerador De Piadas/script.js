///Variaveis
const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokeBtn')

jokebtn.addEventListener('click', generateJoke)

generateJoke(jokebtn)

function generateJoke(){
    const config = {
        headers:{
            Accept: 'application/json'
        },
    }
    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
}