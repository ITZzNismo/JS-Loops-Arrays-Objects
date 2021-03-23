// Task 4 - Day 1
const recipe = {
    recipeTitle : "Chicken Wraps",
    servings : 2,
    ingredients : ["Tortilla Warps", "Salad", "Chicken", "Sour Cream"],
    recipe : []
}

// Task 5 - Day 1
const recipeFunction = {
    cook : function(food) {
        console.log("I'm hungry! Let's cook... " + food);
    }
}

recipeFunction.cook(recipe.recipeTitle);