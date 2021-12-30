function appendCssToTargetElement() {

}

function appendUiObjectsToView(uiObjects) {
    $('#dino-compare').css("display", "none"); // make input form disappear
    let elementChildIndex = 1;
    uiObjects.forEach(function (uiObject) {
        console.log(uiObject);
        let elementSelector = $('div.grid-item:nth-child(' + elementChildIndex + ' )');
        if (uiObject.type === 'human') {
            console.log("INDEX 0: " + elementChildIndex);
            let humanTileSelector = $('div.humanTile');
            let humanTileBackgroundColor = humanTileSelector.css("background-color");
            humanTileSelector.css("background", "url('/" + uiObject.imageSrc + "') no-repeat, " + humanTileBackgroundColor);
            humanTileSelector.css("background-size", "contain");
            humanTileSelector.css("background-position", "center center");
            humanTileSelector.append("<div>" + uiObject.objectName + "</div>");
            humanTileSelector.append(uiObject.fact !== undefined ? "<div>Fact: " + uiObject.fact  + "</div>" : "");
        }
        if (uiObject.type === 'dino' && !elementSelector.hasClass('humanTile')) {
            console.log("INDEX 2: " + elementChildIndex);
            let currentBackgroundColor = elementSelector.css("background-color");
            elementSelector.css("background", "url('/" + uiObject.imageSrc + "') no-repeat, " + currentBackgroundColor);
            elementSelector.css("background-size", "contain");
            elementSelector.css("background-position", "center center");
            elementSelector.append("<div>" + uiObject.objectName + "</div>");
            elementSelector.append(uiObject.fact !== undefined ? "<div>Fact: " + uiObject.fact + "</div>" : "");
            elementChildIndex++;
        } else if (uiObject.type === 'dino' && elementSelector.hasClass('humanTile')) {
            console.log("INDEX: " + elementChildIndex);
            elementChildIndex++;
            console.log("INDEX HUH: " + elementChildIndex);
            let currentBackgroundColor = $('div.grid-item:nth-child(' + elementChildIndex + ' )').css("background-color");
            $('div.grid-item:nth-child(' + elementChildIndex + ' )').css("background", "url('/" + uiObject.imageSrc + "') no-repeat, " + currentBackgroundColor);
            $('div.grid-item:nth-child(' + elementChildIndex + ' )').css("background-size", "contain");
            $('div.grid-item:nth-child(' + elementChildIndex + ' )').css("background-position", "center center");
            $('div.grid-item:nth-child(' + elementChildIndex + ' )').append("<div>" + uiObject.objectName + "</div>");
            $('div.grid-item:nth-child(' + elementChildIndex + ' )').append(uiObject.fact !== undefined ? "<div>Fact: " + uiObject.fact + "</div>" : "");
            elementChildIndex++;
        }
   //     console.log(elementChildIndex);
    });
}