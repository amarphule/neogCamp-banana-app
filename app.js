const button = document.querySelector('.btn-translate');
const inputArea = document.querySelector('#input-text')
const outputArea = document.querySelector('.output')


button.addEventListener('click', () => {
    const url = 'https://api.funtranslations.com/translate/ubbi-dubbi.json?text=' + inputArea.value
    fetch(url)
        .then(
            res => res.json()
        )
        .then(
            json => {
                outputArea.innerHTML = json.contents.translated
            }
        )
        .catch(() => {
            alert('Error Occured')
        }
        )
})