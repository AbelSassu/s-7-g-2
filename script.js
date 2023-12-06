let nameInput = document.getElementById('name');
let counterDiv = document.getElementById('counter');

function saveValue() {

    let savedValueDiv = document.getElementById('saved-value');

    let name = nameInput.value;

    if (name.trim() !== '') {
      localStorage.setItem('user_name', name);
      savedValueDiv.innerHTML = 'Benvenuto in famiglia: ' + name;
      nameInput.value = '';
    } else {
      alert('Scrivi qualcosa almeno');
    }
  }

  function removeValue() {
    localStorage.removeItem('user_name');
    let savedValueDiv = document.getElementById('saved-value');
    savedValueDiv.innerHTML = 'Diseredato';
    nameInput.value = '';
  }

  document.addEventListener('DOMContentLoaded', function() {
    let savedValueDiv = document.getElementById('saved-value');
    let savedName = localStorage.getItem('user_name');

    if (savedName) {
      savedValueDiv.innerHTML = 'No, non sono andato via: ' + savedName;
      nameInput.value = '';
    }
    updateCounter();
  });


  
  function updateCounter() {
    let startTime = sessionStorage.getItem('start_time');

    if (!startTime) {
        startTime = new Date().getTime();
        sessionStorage.setItem('start_time', startTime);
    }

    setInterval(function () {
        let currentTime = new Date().getTime();
        let elapsedTime = Math.floor((currentTime - startTime) / 1000);

        counterDiv.innerHTML = 'Secondi che ti avvicinano di più a Natale: ' + elapsedTime + ' sec';
    }, 1000);
}
  