function showCategory(categoryId) {
    document.getElementById('intro').style.display = 'none';

    const categories = document.querySelectorAll('.category-section');
    categories.forEach(sec => sec.style.display = 'none');

    const selected = document.getElementById(categoryId);
    if (selected) {
        selected.style.display = 'block';
    }
}



function openRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;

    const modalBody = document.getElementById('modal-body');

    let html = `
        <h2 class="recipe-title">${recipe.title}</h2>
        <p><strong>Categoria:</strong> ${recipe.category}</p>
        
        <div class="recipe-columns">
            <div class="recipe-ingredients">
                 <h3>Ingredienti</h3>
                 <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                 </ul>
            </div>
            <div class="recipe-steps">
                 <h3>Procedimento</h3>
                 <ol>
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                 </ol>
            </div>
        </div>
        
        <div class="recipe-notes">
            <p><em>Note di nonna: ${recipe.notes}</em></p>
        </div>
    `;

    modalBody.innerHTML = html;

    document.getElementById('recipe-modal').style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeModal() {
    document.getElementById('recipe-modal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

function printRecipe() {
    window.print();
}

window.onclick = function (event) {
    const modal = document.getElementById('recipe-modal');
    if (event.target == modal) {
        closeModal();
    }
}

