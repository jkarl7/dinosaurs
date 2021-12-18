(function () {
    fetch("dino.json")
        .then(response => response.json())
        .then(json => console.log(json));
})();

function HumanData(name, feet, inches, weight, diet) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
}


function initHumanDataVariables(formInput) {
    let name = "";
    let feet = "";
    let inches = "";
    let weight = "";
    let diet = "";

    for (const formVariable of formInput) {
        if (formVariable.name == 'name') {
            name = formVariable.value;
        } else if (formVariable.name == 'feet') {
            feet = formVariable.value;
        } else if (formVariable.name == 'inches') {
            inches = formVariable.value;
        } else if (formVariable.name == 'weight') {
            weight = formVariable.value;
        } else if (formVariable.name == 'diet') {
            diet = formVariable.value;
        }
    }
    return new HumanData(name, feet, inches, weight, diet);
}

$("#btn").click(function (e) {
    let formInput = $('#dino-compare').serializeArray();
    console.log(formInput);
    let human = initHumanDataVariables(formInput);
    console.log("Name: " + human.name);
    console.log("Feet: " + human.feet);
    console.log("Inches: " + human.inches);
    console.log("Weight: " + human.weight);
    console.log("Diet: " + human.diet);
});

// Create Dino Constructor


// Create Dino Objects


// Create Human Object

// Use IIFE to get human data from form


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
