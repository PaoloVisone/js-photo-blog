// Selezino gli elementi d'interesse (Output)
const cardBox = document.getElementById('card-box');
const overlay = document.getElementById('overlay');
const cards = document.getElementsByClassName('card');



// API
const endopoint = 'https://lanciweb.github.io/demo/api/pictures/';

// Variabile d'appoggio
let item = ""

// Chiamata get
axios.get(endopoint)
  .then(reponse => {
    const result = reponse.data;
    console.log(result);

    // Ciclo l'array d'oggetti
    for (let i = 0; i < result.length; i++) {
      let elements = result[i]

      // Seleziono le proprietà dell'oggetto di cui ho bisogno
      const { id, title, date, url } = elements;
      // console.log(id, title, date, url);

      // Creo gli elementi html
      item += `
            <div class="card">
              <div class="card-picture">
                <img class="picture" src="${url}" alt="${id}">
              </div>
              <div class="card-text">
                <span class="date">${date}</span>
                <h2 class="description">${title}</h2>
              </div>
                      <!-- pin --> <!-- pin -->
                      <!-- pin --> <!-- pin --> 
                <img id="pin" src="img/pin.svg" alt="">
            </div>`

      // Output 
      cardBox.innerHTML = item;

      // Evento click

      // Ciclo le card
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', () => {

          // Aggiungo la classe block e rimuovo la classe none
          overlay.classList.add('block');
          overlay.classList.remove('none');

          // Creo l'elemento img in base all'indice
          overlay.innerHTML = `
          <button id="btn">Chiudi</button>
          <img id="over-pic" src="${result[i].url}" alt="${result[i].id}">`

          // Seleziono il bottone
          const button = document.getElementById('btn');

          // Evento click
          button.addEventListener('click', () => {

            // Rimuovo la classe block e aggiungo la classe none
            overlay.classList.remove('block');
            overlay.classList.add('none');
          })

        })
      }
    }
  });









