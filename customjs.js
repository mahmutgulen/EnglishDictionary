const wordInput = document.getElementById('text');
const button = document.querySelector('.search-button');
const resultDiv = document.getElementById('result-container');

const wordText = document.getElementById('wordText');
const meaning = document.getElementById('result-meaning');
const audio = document.getElementById('audio');


async function fetchApi() {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput.value}`;

    const result = await fetch(url).then((res) => res.json());

    console.log(result);

    if (result.title) {
        resultDiv.style.display = 'none';
    }
    else {
        resultDiv.style.display = 'block';
        wordText.textContent = result[0].word;
        meaning.textContent = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;
    }

}



button.addEventListener('click', fetchApi);