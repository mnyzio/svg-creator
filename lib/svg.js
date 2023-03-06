// Require statements
const { Triangle, Circle, Square, Text } = require("./shape");

// Function that returns content that will be written to file
function createSVG(text, textColor, shape, shapeColor){
    // Text section
    const newText = new Text();
    newText.setText(text);
    newText.setColor(textColor);
    
    // Shape section
    let newShape;

    if (shape === 'circle') {
        newShape = new Circle();
    } else if (shape === 'triangle'){
        newShape = new Triangle();
    } else if (shape === 'square') {
        newShape = new Square();
    } else {
        throw new Error ("Shape not supported.")
    }
    
    newShape.setColor(shapeColor);   

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${newShape.render()}
    ${newText.render()}    
</svg>`
}

module.exports = { createSVG };