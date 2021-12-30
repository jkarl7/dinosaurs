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
