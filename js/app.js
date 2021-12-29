let arrayOfDinosFromJson = [];

function initArrayOfDinoObjects(json) {
    arrayOfDinosFromJson = [];
    let jsonDinos = json.Dinos;
    for (let index = 0; index < jsonDinos.length; index++) {
        arrayOfDinosFromJson.push(new Dino(
            jsonDinos[index].species,
            jsonDinos[index].weight,
            jsonDinos[index].height,
            jsonDinos[index].diet,
            jsonDinos[index].where,
            jsonDinos[index].when,
            jsonDinos[index].fact));
    }
}

(function () {
    fetch("dino.json")
        .then(response => response.json())
        .then(json => initArrayOfDinoObjects(json));
    console.log(arrayOfDinosFromJson);
})();

function createHumanObject(formInput) {
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

function compareHumanWeightAgainstDinoWeight(dino, human) {
    let humanWeight = human.weight;
    let dinoWeight = dino.weight;
    let result = dinoWeight - humanWeight;
    if (result > 0) {
        return dino.species + " is " + result + " Kg heavier than you!";
    } else {
        return dino.species + " is " + Math.abs(result) + " Kg lighter than you!";
    }
}

function compareHumanHeightAgainstDinoHeight(dino, human) {
    const ONE_FEET_IN_INCHES = 12;
    let humanTotalHeightInInches = human.inches + (ONE_FEET_IN_INCHES * human.feet);
    let dinoTotalHeightInInches = dino.height;
    let result = dinoTotalHeightInInches - humanTotalHeightInInches;
    if (result > 0) {
        return dino.species + " is " + result + " inches taller than you!";
    } else {
        return dino.species + " is " + Math.abs(result) + " inches smaller than you!";
    }
}

function isSameDiet(dinoDiet, humanDiet) {
    return humanDiet.toLowerCase().localeCompare(dinoDiet.toLowerCase()) === 0;
}

function compareHumanDietAgainstDinoDiet(dino, human) {
    let humanDiet = human.diet;
    let dinoDiet = dino.diet;
    if (isSameDiet(dinoDiet, humanDiet)) {
        return dino.species + "is also " + dinoDiet + ", just like you!";
    } else {
        return dino.species + "is " + dinoDiet + ", while you are " + humanDiet;
    }
}


function generateUiObject(data) {
    if (data instanceof HumanData) {
        let humanUiObject = new UserInterfaceData();
        return humanUiObject;
    } else {

    }
}

$("#btn").click(function (e) {
    let formInput = $('#dino-compare').serializeArray();
    console.log(formInput);
    let human = createHumanObject(formInput);
    console.log(arrayOfDinosFromJson[0]);
 //   let humanUiObject =
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
