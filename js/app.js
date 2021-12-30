/**
 * Convert JSON array into normal JS array
 * @param json
 * @returns {*[]}
 */
function initArrayOfDinoObjects(json) {
    let arrayOfDinosFromJson = [];
    let jsonDinos = json.Dinos;
    jsonDinos.forEach(function (jsonDinoObject) {
        arrayOfDinosFromJson.push(
            new DinoJsonData(
                jsonDinoObject.species,
                jsonDinoObject.weight,
                jsonDinoObject.height,
                jsonDinoObject.diet,
                jsonDinoObject.where,
                jsonDinoObject.when,
                jsonDinoObject.fact
            )
        );
    });
    return arrayOfDinosFromJson;
}


function fetchDinoDataInJsonFormat() {
    return fetch("dino.json")
        .then((response) => response.json())
        .then(json => {
            return json;
        }).catch(error => {
            console.error(error);
        });
}

function createHumanFormDataObject(formInput) {
    let name = "";
    let feet = "";
    let inches = "";
    let weight = "";
    let diet = "";

    formInput.forEach(function (formVariable) {
        if (formVariable.name === 'name') {
            name = formVariable.value;
        } else if (formVariable.name === 'feet') {
            feet = formVariable.value;
        } else if (formVariable.name === 'inches') {
            inches = formVariable.value;
        } else if (formVariable.name === 'weight') {
            weight = formVariable.value;
        } else if (formVariable.name === 'diet') {
            diet = formVariable.value;
        }
    });
    return new HumanFormData(name, feet, inches, weight, diet);
}

function compareHumanWeightAgainstDinoWeight(dino, human) {
    let humanWeight = human.weight;
    let dinoWeight = dino.weight;
    let result = dinoWeight - humanWeight;
    if (result > 0) {
        return `${dino.species} is ${result} (lbs) heavier than you!`;
    } else {
        return `${dino.species} is ${Math.abs(result)} (lbs) lighter than you!`;
    }
}

function compareHumanHeightAgainstDinoHeight(dino, human) {
    const ONE_FEET_IN_INCHES = 12;
    let humanTotalHeightInInches = human.inches + (ONE_FEET_IN_INCHES * human.feet);
    let dinoTotalHeightInInches = dino.height;
    let result = dinoTotalHeightInInches - humanTotalHeightInInches;
    if (result > 0) {
        return `${dino.species} is ${result} inches taller than you!`;
    } else {
        return `${dino.species} is ${Math.abs(result)} inches smaller than you!`;
    }
}

function isSameDiet(dinoDiet, humanDiet) {
    return humanDiet.toLowerCase().localeCompare(dinoDiet.toLowerCase()) === 0;
}

function compareHumanDietAgainstDinoDiet(dino, human) {
    let humanDiet = human.diet;
    let dinoDiet = dino.diet;
    if (isSameDiet(dinoDiet, humanDiet)) {
        return `${dino.species} is also ${dinoDiet}, just like you!`;
    } else {
        return `${dino.species} is ${dinoDiet}, while you are ${humanDiet}!`;
    }
}

function generateRandomFactForDinoJsonData(dinoJsonData, humanFormData) {
    let randomFactNumber = Math.floor((Math.random() * 5));
    switch (randomFactNumber) {
        case 0:
            dinoJsonData.fact = compareHumanWeightAgainstDinoWeight(dinoJsonData, humanFormData);
            break;
        case 1:
            dinoJsonData.fact = compareHumanHeightAgainstDinoHeight(dinoJsonData, humanFormData);
            break;
        case 2:
            dinoJsonData.fact = compareHumanDietAgainstDinoDiet(dinoJsonData, humanFormData);
            break;
        case 3:
            dinoJsonData.fact = `${dinoJsonData.species} lived in ${dinoJsonData.where}`;
            break;
        case 4:
            dinoJsonData.fact = `${dinoJsonData.species} lived during ${dinoJsonData.when} era!`;
            break;
        case 5:
            break;
    }
}

function generateUiObject(data) {
    if (data instanceof HumanFormData) {
        let humanUiObject = new UserInterfaceDto(data.name, 'human');
        humanUiObject.createImageSrc();
        return humanUiObject;
    } else {
        let dinoUiObject = new DinoUserInterfaceDto(data.species, data.species);
        dinoUiObject.createImageSrc();
        dinoUiObject.setFact(data.fact);
        return dinoUiObject;
    }
}

async function main() {
    let dinoJsonObject = await fetchDinoDataInJsonFormat();
    let arrayOfDinoObjects = initArrayOfDinoObjects(dinoJsonObject);

    let formInput = $('#dino-compare').serializeArray();
    let humanFormData = createHumanFormDataObject(formInput);

    arrayOfDinoObjects.forEach(function (dinoArrayObject) {
        generateRandomFactForDinoJsonData(dinoArrayObject, humanFormData);
    });

    let uiObjects = [];

    uiObjects.push(generateUiObject(humanFormData));

    arrayOfDinoObjects.forEach(function (dinoArrayObject) {
        uiObjects.push(generateUiObject(dinoArrayObject));
    });

    appendUiObjectsToView(uiObjects);
}

/**
 * Activate main function. This is main entry point from UI to javascript
 */
$("#btn").click(function (e) {
    $('#dino-compare').hide();; // make input form disappear
    $('#grid').show(); // make infographic appear
    main();
});