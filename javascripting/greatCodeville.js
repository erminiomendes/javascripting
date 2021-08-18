const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Code here!
    let possessIngr = []
    let result = ''
    let  ingredientCheck = function(bakery, recipes){
        let possessIngr = []
    //console.log(bakery);
        for (const ingr of bakery){
            for (const recipeIngredient of recipes){
                //console.log(recipeIngredient.ingredients);
                for (const ingrRecipes of recipeIngredient.ingredients)
                //console.log(ingrRecipes);
                if (ingr === ingrRecipes){
                    //console.log(recipeIngredient.name);
                    possessIngr.push(recipeIngredient.name)
                    
                }
            }
        }
        return possessIngr
    }

    let a = ingredientCheck(bakeryA, recipes);
    let b = ingredientCheck(bakeryB, recipes);
    for (const sameNameA of a){
        for (const sameNameB of b){
            if (sameNameA === sameNameB){
                result = sameNameA;
            }
        }
    }
    return result
}
   
    

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));