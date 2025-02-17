// User Authentication
function loginUser() {
    alert("Login functionality coming soon!");
}

function registerUser() {
    alert("Registration functionality coming soon!");
}

// Meal Planning
function fetchMealPlan() {
    document.getElementById("meal-results").innerHTML = "Loading meal plan...";
    // Simulate API call
    setTimeout(() => {
        document.getElementById("meal-results").innerHTML = "Meal Plan: Breakfast, Lunch, Dinner";
    }, 1000);
}

// Grocery List Management
function addGroceryItem() {
    let item = prompt("Enter grocery item:");
    if (item) {
        let list = document.getElementById("grocery-items");
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    }
}

// Meal List
function addMeal(meal) {
    let list = document.getElementById("meals");
    let li = document.createElement("li");
    li.textContent = meal;
    list.appendChild(li);
}

// Save and View Recipes
let savedRecipes = [];

function saveRecipe() {
    let recipe = prompt("Enter recipe name:");
    if (recipe) {
        savedRecipes.push(recipe);
        alert("Recipe saved!");
    }
}

function viewSavedRecipes() {
    alert("Saved Recipes:\n" + savedRecipes.join("\n"));
}

// Recipe Search
function searchRecipe() {
    let query = document.getElementById("search-query").value;
    document.getElementById("recipe-results").innerHTML = `Searching for recipes with ${query}...`;
    // Simulate API search
    setTimeout(() => {
        document.getElementById("recipe-results").innerHTML = "Found recipes: Recipe 1, Recipe 2";
    }, 1000);
}

// Nutrition Analysis
function analyzeNutrition() {
    alert("Nutrition analysis feature coming soon!");
}

// Meal Filtering
function filterMeals() {
    let query = document.getElementById("filter-query").value;
    alert("Filtering meals by: " + query);
}
// Meal Pictures Section
function addMealPicture() {
    let imageUrl = prompt("Enter the image URL of the meal:");
    if (imageUrl) {
        let gallery = document.getElementById("image-gallery");
        let img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Meal Image";
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.borderRadius = "5px";
        img.style.objectFit = "cover";
        gallery.appendChild(img);
    }
}
const apiKey = 'YOUR_API_KEY';
        const spoonacularApiUrl = 'https://api.spoonacular.com/mealplanner/generate';

        // Function to fetch meal plan from the API
        function fetchMealPlan() {
            const timeFrame = 'day'; // Example: day, week, etc.
            const url = `${spoonacularApiUrl}?apiKey=${apiKey}&timeFrame=${timeFrame}`;
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const mealResults = data.meals;
                    let mealListHTML = '<ul>';
                    mealResults.forEach(meal => {
                        mealListHTML += `<li>${meal.title}</li>`;
                    });
                    mealListHTML += '</ul>';
                    document.getElementById('meal-results').innerHTML = mealListHTML;
                })
                .catch(error => {
                    console.error('Error fetching meal plan:', error);
                });
        }

        // Function to search for recipes based on user input
        function searchRecipe() {
            const query = document.getElementById('search-query').value;
            const searchUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${query}&number=5`;
            
            fetch(searchUrl)
                .then(response => response.json())
                .then(data => {
                    let recipeResultsHTML = '<ul>';
                    data.forEach(recipe => {
                        recipeResultsHTML += `<li><a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">${recipe.title}</a></li>`;
                    });
                    recipeResultsHTML += '</ul>';
                    document.getElementById('recipe-results').innerHTML = recipeResultsHTML;
                })
                .catch(error => {
                    console.error('Error searching for recipes:', error);
                });
        }
        
        // Placeholder functions for other actions
        function loginUser() { console.log('Login button clicked'); }
        function registerUser() { console.log('Register button clicked'); }
        function addGroceryItem() { console.log('Add Grocery Item button clicked'); }
        function saveRecipe() { console.log('Save Recipe button clicked'); }
        function viewSavedRecipes() { console.log('View Saved Recipes button clicked'); }
        function analyzeNutrition() { console.log('Analyze Nutrition button clicked'); }
        function filterMeals() { console.log('Filter Meals button clicked'); }
    