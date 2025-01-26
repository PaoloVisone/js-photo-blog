// Selezino gli elementi d'interesse (Output)
const cardBox = document.getElementById('card-box');


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
            console.log(id, title, date, url);

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
        }
    })

console.log(item);