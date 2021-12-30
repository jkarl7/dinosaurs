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
                jsonDinoObject.fact,
                jsonDinoObject.type
            )
        );
    });
    return arrayOfDinosFromJson;
}

/**
 * Get dino data as JSON
 * @returns {Promise<any>}
 */
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
    formInput.forEach(function (formVariable) {
        if (formVariable.name === 'name') {
            this.name = formVariable.value;
        } else if (formVariable.name === 'feet') {
            this.feet = formVariable.value;
        } else if (formVariable.name === 'inches') {
            this.inches = formVariable.value;
        } else if (formVariable.name === 'weight') {
            this.weight = formVariable.value;
        } else if (formVariable.name === 'diet') {
            this.diet = formVariable.value;
        }
    });
    return new HumanFormData(this.name, this.feet, this.inches, this.weight, this.diet);
}

function generateRandomFactForDinoJsonData(dinoArrayObject, humanFormData) {
    let randomFactNumber = Math.floor((Math.random() * 5));
    switch (randomFactNumber) {
        case 0:
            dinoArrayObject.fact = compareHumanWeightAgainstDinoWeight(dinoArrayObject, humanFormData);
            break;
        case 1:
            dinoArrayObject.fact = compareHumanHeightAgainstDinoHeight(dinoArrayObject, humanFormData);
            break;
        case 2:
            dinoArrayObject.fact = compareHumanDietAgainstDinoDiet(dinoArrayObject, humanFormData);
            break;
        case 3:
            dinoArrayObject.fact = `${dinoArrayObject.species} lived in ${dinoArrayObject.where}`;
            break;
        case 4:
            dinoArrayObject.fact = `${dinoArrayObject.species} lived during ${dinoArrayObject.when} era!`;
            break;
        case 5:
            break;
    }
}

/**
 * Build objects to pass on to UI logic
 * @param dinoArrayObject
 * @returns {BirdUserInterfaceDto|UserInterfaceDto|DinoUserInterfaceDto}
 */
function generateUiObject(dinoArrayObject) {
    if (dinoArrayObject instanceof HumanFormData) {
        let humanUiObject = new UserInterfaceDto(dinoArrayObject.name, 'human');
        humanUiObject.createImageSrc();
        return humanUiObject;
    } else if (dinoArrayObject instanceof DinoJsonData && dinoArrayObject.type === 'dino'){
        let dinoUiObject = new DinoUserInterfaceDto(dinoArrayObject.species, dinoArrayObject.species);
        dinoUiObject.createImageSrc();
        dinoUiObject.setFact(dinoArrayObject.fact);
        return dinoUiObject;
    } else {
        let birdUiObject = new BirdUserInterfaceDto(dinoArrayObject.species, dinoArrayObject.species);
        birdUiObject.createImageSrc();
        birdUiObject.setFact(dinoArrayObject.fact);
        return birdUiObject;
    }
}

/**
 * We wrap all code into async function in order to use await, which waits until normal JSON is returned instead of Promise object
 * @returns {Promise<void>}
 */
async function main() {
    let dinoJsonObject = await fetchDinoDataInJsonFormat();
    let arrayOfDinoObjects = initArrayOfDinoObjects(dinoJsonObject);

    let formInput = $('#dino-compare').serializeArray();
    let humanFormData = createHumanFormDataObject(formInput);

    arrayOfDinoObjects.forEach(function (dinoArrayObject) {
        if (dinoArrayObject.type === 'dino') {
            generateRandomFactForDinoJsonData(dinoArrayObject, humanFormData);
        }
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
    $('#dino-compare').hide(); // make input form disappear
    $('#grid').show(); // make infographic appear
    main();
});