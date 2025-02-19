const SPOONACULAR_API_KEY = "YOUR_SPOONACULAR_API_KEY";
const EDAMAM_API_ID = "YOUR_EDAMAM_API_ID";
const EDAMAM_API_KEY = "YOUR_EDAMAM_API_KEY";

let users = {};
let currentUser = null;

function loginUser() {
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");
    if (users[username] && users[username] === password) {
        currentUser = username;
        alert(`Welcome, ${username}!`);
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function registerUser() {
    let username = prompt("Choose a username:");
    if (users[username]) {
        alert("Username already taken. Try another.");
        return;
    }
    let password = prompt("Choose a password:");
    users[username] = password;
    alert("Registration successful! You can now log in.");
}

function fetchMealPlan() {
    document.getElementById("meal-results").innerHTML = "<p>Fetching meal plan...</p>";
    fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${SPOONACULAR_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("meal-results").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error("Error fetching meal plan:", error));
}

function addGroceryItem() {
    let item = prompt("Enter grocery item:");
    if (item) {
        let list = document.getElementById("grocery-items");
        let listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    }
}

function saveRecipe() {
    alert("Recipe saved!");
    // Recipe saved
}

function viewSavedRecipes() {
    alert("Viewing saved recipes...");
    
}

function searchRecipe() {
    let query = document.getElementById("search-query").value;
    document.getElementById("recipe-results").innerHTML = `<p>Searching recipes for: ${query}</p>`;
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${EDAMAM_API_ID}&app_key=${EDAMAM_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("recipe-results").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error("Error searching recipes:", error));
}

function analyzeNutrition() {
    let query = document.getElementById("search-query").value;
    fetch(`https://api.edamam.com/api/nutrition-data?app_id=${EDAMAM_API_ID}&app_key=${EDAMAM_API_KEY}&ingr=${query}`)
        .then(response => response.json())
        .then(data => {
            alert(`Calories: ${data.calories}, Protein: ${data.totalNutrients.PROCNT.quantity}g`);
        })
        .catch(error => console.error("Error analyzing nutrition:", error));
}

function filterMeals() {
    let query = document.getElementById("filter-query").value;
    alert(`Filtering meals by: ${query}`);
    
