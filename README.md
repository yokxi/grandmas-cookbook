<div align="center">

# Le Ricette di Nonna Maria

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

_Una raccolta digitale delle ricette tradizionali di Nonna Maria, conservate con amore in un formato che ricorda un vecchio quaderno di cucina._

[**🌐 VAI AL SITO WEB**](https://yokxi.github.io/grandmas-cookbook/)

</div>

## 🚀 Caratteristiche
- **Design Vintage**: Stile grafico curato che ricorda carta e inchiostro.
- **Ricette Organizzate**: Suddivisione in Primi, Secondi, Dolci e Altro.
- **Stampa PDF**: Funzionalità per stampare o salvare le ricette in PDF.

## 🛠️ Installazione
Basta clonare il repository e aprire `index.html` nel browser!

## 📝 Come aggiungere una ricetta

1.  Apri il file `js/recipes/store.js`.
2.  Aggiungi un nuovo oggetto ricetta seguendo questo formato:
    ```javascript
    'id_nuova_ricetta': {
        title: "Nome della Ricetta",
        category: "Primi/Secondi/Dolci/Altro",
        ingredients: [
            "Ingrediente 1",
            "Ingrediente 2"
        ],
        steps: [
            "Passaggio 1",
            "Passaggio 2"
        ],
        notes: "Note opzionali"
    },
    ```
3.  Apri `index.html`, vai nella sezione della categoria scelta e aggiungi la "card" copiando questa struttura:
    ```html
    <article class="recipe-card">
        <div class="recipe-thumb">
            <div class="placeholder-img">Nome Immagine</div>
        </div>
        <h3>Nome della Ricetta</h3>
        <p>Breve descrizione.</p>
        <button class="btn-read" onclick="openRecipe('id_nuova_ricetta')">Leggi Ricetta</button>
    </article>
    ```
