function HumanData(name, feet, inches, weight, diet) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
}

function Dino(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

// TODO: Make abstract DOM data and use extend on dino dom data and human data
function UserInterfaceData(objectName) {
    this.objectName = objectName;
    let imageSrc = "";

    this.createImageSrc = function () {
        imageSrc = "images/" + this.objectName.toLowerCase() + ".png";
    }
}

function DinoUserInterfaceData() {
    let fact = "";
}

DinoUserInterfaceData.prototype = Object.create(UserInterfaceData.prototype);

