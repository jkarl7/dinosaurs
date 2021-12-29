function HumanFormData(name, feet, inches, weight, diet) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
}

function DinoJsonData(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact; // this fact might be overridden by other facts
}

// Classes for UI

function UserInterfaceDto(objectName, imageName) {
    this.objectName = objectName;
    this.imageName = imageName;
}

UserInterfaceDto.prototype.createImageSrc = function () {
    this.imageSrc = "images/" + this.imageName.toLowerCase() + ".png";
}

function DinoUserInterfaceDto(name, imageName) {
    UserInterfaceDto.call(this, name, imageName);
    this.fact = "";
}

DinoUserInterfaceDto.prototype = UserInterfaceDto;

DinoUserInterfaceDto.prototype.createImageSrc = function () {
    UserInterfaceDto.prototype.createImageSrc.call(this)
}

DinoUserInterfaceDto.prototype.setFact = function (fact) {
    this.fact = fact;
}

