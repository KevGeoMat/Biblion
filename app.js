document.addEventListener('DOMContentLoaded', function() {
    const verseElement = document.getElementById('daily-verse');

    fetch('https://beta.ourmanna.com/api/v1/get/?format=text')
        .then(response => response.text())
        .then(verse => {
            verseElement.textContent = verse;
        })
        .catch(error => {
            verseElement.textContent = 'Unable to load the verse. Please try again later.';
        });
});
