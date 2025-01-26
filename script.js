// Selezino gli elementi d'interesse (Output)
const content = document.getElementById('content');


// API
const endopoint = 'https://lanciweb.github.io/demo/api/pictures/';

// Variabile d'appoggio
let item = ""

// Chiamata get
axios.get(endopoint)
    .then(reponse => {
        const result = reponse.data;
        console.log(result);

    })