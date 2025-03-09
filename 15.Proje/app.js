const API_KEY = "67da2583c62c40e3a57523882a26ec6c";
const recipeListEl = document.querySelector("#recipe-list");

function displayRecipes(recipes){
    recipeListEl.innerHTML = "";
    recipes.forEach(recipe => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image"

         recipeTitleEl = document.createElement("h2")
        recipeTitleEl.innerText = recipe.title

        recipeIngradientsEl = document.createElement("p")
        recipeIngradientsEl.innerHTML = `<strong>Malzemeler :</strong>${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(",")}`;

        recipeLinkEl = document.createElement("a")
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "Tarifi Görüntüle"

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeIngradientsEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes;
}

async function init(){
    const recipes = await getRecipes();
    
    displayRecipes(recipes)
}

init();