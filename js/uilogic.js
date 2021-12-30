function appendCssToTargetElement(uiObject, elementSelector) {
    let currentBackgroundColor = elementSelector.css("background-color");
    elementSelector.css("background", "url('/" + uiObject.imageSrc + "') no-repeat, " + currentBackgroundColor);
    elementSelector.css("background-size", "contain");
    elementSelector.css("background-position", "center center");
    elementSelector.append("<div><b>Name</b>: " + uiObject.objectName + "</div>");
    elementSelector.append(uiObject.fact !== undefined ? "<div><b>Fact:</b> " + uiObject.fact + "</div>" : "");
}

function isDinoOrBird(type) {
    return type === 'dino' || type === 'bird';
}

function appendUiObjectsToView(uiObjects) {
    let elementChildIndex = 1;
    uiObjects.forEach(function (uiObject) {
        console.log(uiObject);
        // noinspection JSJQueryEfficiency
        let elementSelector = $('div.grid-item:nth-child(' + elementChildIndex + ' )');
        if (uiObject.type === 'human') {
            let humanTileElementSelector = $('div.humanTile');
            appendCssToTargetElement(uiObject, humanTileElementSelector);
        }
        if (isDinoOrBird(uiObject.type) && !elementSelector.hasClass('humanTile')) {
            appendCssToTargetElement(uiObject, elementSelector);
            elementChildIndex++;
        } else if (isDinoOrBird(uiObject.type) && elementSelector.hasClass('humanTile')) {
            elementChildIndex++;
            appendCssToTargetElement(uiObject, $('div.grid-item:nth-child(' + elementChildIndex + ' )'));
            elementChildIndex++;
        }
    });
}