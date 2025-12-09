<div align="center">

# Grandma Maria's Recipes

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

_A digital collection of Grandma Maria's traditional recipes, lovingly preserved in a format that resembles an old kitchen notebook._

[**🌐 GO TO WEBSITE**](https://yokxi.github.io/grandmas-cookbook/)

</div>

## 🚀 Features
- **Vintage Design**: Curated graphic style resembling paper and ink.
- **Organized Recipes**: Divided into First Courses, Main Courses, Desserts, and Others.
- **PDF Printing**: Functionality to print or save recipes as PDF.

## 🛠️ Installation
Just clone the repository and open `index.html` in your browser!

## 📝 How to add a recipe

1.  Open the file `js/recipes/store.js`.
2.  Add a new recipe object following this format:
    ```javascript
    'new_recipe_id': {
        title: "Recipe Name",
        category: "Primi/Secondi/Dolci/Altro",
        ingredients: [
            "Ingredient 1",
            "Ingredient 2"
        ],
        steps: [
            "Step 1",
            "Step 2"
        ],
        notes: "Optional notes"
    },
    ```
3.  Open `index.html`, go to the chosen category section, and add the "card" by copying this structure:
    ```html
    <article class="recipe-card">
        <div class="recipe-thumb">
            <div class="placeholder-img">Image Name</div>
        </div>
        <h3>Recipe Name</h3>
        <p>Short description.</p>
        <button class="btn-read" onclick="openRecipe('new_recipe_id')">Read Recipe</button>
    </article>
    ```
