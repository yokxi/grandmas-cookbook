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
        <h2 style="margin-top:0">${recipe.title}</h2>
        <p><strong>Categoria:</strong> ${recipe.category}</p>
        
        <div style="display:flex; gap:20px; flex-wrap:wrap; margin-top:20px;">
            <div style="flex:1; min-width:250px;">
                 <h3>Ingredienti</h3>
                 <ul style="list-style-type: disc; padding-left: 20px;">
                    ${recipe.ingredients.map(ing => `<li style="margin-bottom: 10px;">${ing}</li>`).join('')}
                 </ul>
            </div>
            <div style="flex:1.5; min-width:300px;">
                 <h3>Procedimento</h3>
                 <ol>
                    ${recipe.steps.map(step => `<li style="margin-bottom: 12px;">${step}</li>`).join('')}
                 </ol>
            </div>
        </div>
        
        <div style="margin-top:20px; border-top:1px dashed #8b5a2b; padding-top:10px;">
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

