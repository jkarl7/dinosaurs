function HumanFormData(name, feet, inches, weight, diet) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
}

function DinoJsonData(species, weight, height, diet, where, when, fact, type) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact; // this fact might be overridden by other facts,
    this.type = type;
}

// Classes for UI

// Base function/class for UI objects
function UserInterfaceDto(objectName, imageName) {
    this.objectName = objectName;
    this.imageName = imageName;
    this.type = 'human';
}

UserInterfaceDto.prototype.createImageSrc = function () {
    this.imageSrc = "images/" + this.imageName.toLowerCase() + ".png";
};

// Function/class for dino UI objects
function DinoUserInterfaceDto(name, imageName) {
    UserInterfaceDto.call(this, name, imageName);
    this.type = 'dino';
}

DinoUserInterfaceDto.prototype = UserInterfaceDto;

DinoUserInterfaceDto.prototype.createImageSrc = function () {
    UserInterfaceDto.prototype.createImageSrc.call(this)
};

DinoUserInterfaceDto.prototype.setFact = function (fact) {
    this.fact = fact;
};

// Function/class for bird UI objects
function BirdUserInterfaceDto(name, imageName) {
    UserInterfaceDto.call(this, name, imageName);
    this.type = 'bird';
}

BirdUserInterfaceDto.prototype = UserInterfaceDto;

BirdUserInterfaceDto.prototype.createImageSrc = function () {
    UserInterfaceDto.prototype.createImageSrc.call(this)
};


